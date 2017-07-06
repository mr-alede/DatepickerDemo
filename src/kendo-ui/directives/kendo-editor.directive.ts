import {
  Directive, ElementRef, HostListener, Input, OnInit, OnDestroy,
  HostBinding, OnChanges, EventEmitter, Output
} from '@angular/core';

import { KendoBaseDirective } from './kendo-base.directive';

@Directive({
  selector: '[appKendoEditor]',
  exportAs: 'appKendoEditor'
})
export class KendoEditorDirective extends KendoBaseDirective implements OnInit, OnDestroy, OnChanges {
  @Input() kendoEditorOptions: any = {};

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {
    super(el, 'kendoEditor');
  }

  ngOnInit() {
    this.kendoEditorOptions.change = this.change.bind(this);

    this.init(this.kendoEditorOptions);
  }

  ngOnDestroy() {
    this.destroy();
  }

  ngOnChanges(changes: any) {
    if (changes.value && changes.value.currentValue) {
      this.widget.value(changes.value.currentValue);
    }
  }

  change(e) {
    let value = e.sender.value();
    this.valueChange.emit(value);
  }
}
