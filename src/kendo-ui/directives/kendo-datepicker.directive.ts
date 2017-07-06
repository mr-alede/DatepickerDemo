import {
  Directive, ElementRef, HostListener, Input, OnInit, OnDestroy,
  HostBinding, OnChanges, EventEmitter, Output
} from '@angular/core';

import { KendoBaseDirective } from './kendo-base.directive';

@Directive({
  selector: '[appKendoDatePicker]',
  exportAs: 'appKendoDatePicker'
})
export class KendoDatePickerDirective extends KendoBaseDirective implements OnInit, OnDestroy, OnChanges {
  @Input() kendoDatePickerOptions: any = {};

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {
    super(el, 'kendoDatePicker');
  }

  ngOnInit() {
    this.kendoDatePickerOptions.change = this.change.bind(this);

    this.init(this.kendoDatePickerOptions);

    this.widget.value(this.value);
  }

  ngOnDestroy() {
    this.destroy();
  }

  ngOnChanges(changes: any) {
    if (changes.value && this.widget) {
      this.widget.value(changes.value.currentValue);
    }
  }

  change(e) {
    let value = e.sender.value();
    this.valueChange.emit(value);
  }
}
