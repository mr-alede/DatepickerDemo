import {
  Component, OnInit, forwardRef, Input, OnChanges,
  Optional, Inject, Output, ViewChild, EventEmitter
} from '@angular/core';

import {
  FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR,
  NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validator
} from '@angular/forms';

import { DropDownListComponent } from '@progress/kendo-angular-dropdowns';

@Component({
  selector: 'app-dropdown',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DropDownComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DropDownComponent), multi: true }
  ]
})
export class DropDownComponent implements ControlValueAccessor, OnChanges, Validator {
  @ViewChild(DropDownListComponent) dropDownList: DropDownListComponent;

  private _model: any;

  @Input() data: Array<any>;
  filteredData: Array<any>;

  @Input() textField;
  @Input() valueField;
  @Input() defaultItem;

  @Input() valuePrimitive = true;

  @Output() selectionChange = new EventEmitter();

  propagateChange: any = () => { };
  validateFn: any = () => { };

  @Input('model')
  get model() {
    return this._model;
  }

  set model(val) {
    if (val !== this._model) {
      this._model = val;
      this.propagateChange(val);
    }
  }

  handleFilter(value) {
    this.filteredData = this.data
      .filter(s => {
        let text = this.textField ? s[this.textField] : s;
        return text.toLowerCase().indexOf(value.toLowerCase()) !== -1;
      });
  }

  ngOnChanges(changes) {
    if (changes.data && changes.data.currentValue) {
      this.filteredData = changes.data.currentValue;
    }
  }

  writeValue(value) {
    this.model = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
    this.dropDownList.registerOnTouched(fn);
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }

  handleSelection(value) {
    this.selectionChange.emit(value);
  }
}
