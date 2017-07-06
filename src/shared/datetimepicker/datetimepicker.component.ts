import {
  Component, OnInit, forwardRef, Input, OnChanges,
  Optional, Inject, Output, ViewChild, EventEmitter
} from '@angular/core';

import {
  FormControl, ControlValueAccessor, NG_VALUE_ACCESSOR,
  NG_VALIDATORS, NG_ASYNC_VALIDATORS, Validator
} from '@angular/forms';

@Component({
  selector: 'app-datetimepicker',
  templateUrl: './datetimepicker.component.html',
  styleUrls: ['./datetimepicker.component.scss'],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => DateTimePickerComponent), multi: true },
    { provide: NG_VALIDATORS, useExisting: forwardRef(() => DateTimePickerComponent), multi: true }
  ]
})
export class DateTimePickerComponent implements ControlValueAccessor, OnChanges, Validator {
  private _model: any;

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

  ngOnChanges(changes) {
    // if (changes.data && changes.data.currentValue) {
    //   this.filteredData = changes.data.currentValue;
    // }
  }

  writeValue(value) {
    this.model = value;
  }

  registerOnChange(fn) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn) {
  }

  validate(c: FormControl) {
    return this.validateFn(c);
  }
}
