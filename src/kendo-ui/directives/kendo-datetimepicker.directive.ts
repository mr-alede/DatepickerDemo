import {
  Directive, ElementRef, HostListener, Input, OnInit, OnDestroy,
  HostBinding, OnChanges, EventEmitter, Output
} from '@angular/core';

import { KendoBaseDirective } from './kendo-base.directive';

@Directive({
  selector: '[appKendoDateTimePicker]',
  exportAs: 'appKendoDateTimePicker'
})
export class KendoDateTimePickerDirective extends KendoBaseDirective implements OnInit, OnDestroy, OnChanges {
  @Input() kendoDateTimePickerOptions: any = {};

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {
    super(el, 'kendoDateTimePicker');
  }

  ngOnInit() {
    this.kendoDateTimePickerOptions.change = this.change.bind(this);

    this.init(this.kendoDateTimePickerOptions);
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
