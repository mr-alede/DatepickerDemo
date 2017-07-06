import {
  Directive, ElementRef, HostListener, Input, OnInit, OnDestroy
} from '@angular/core';

import { KendoBaseDirective } from './kendo-base.directive';

@Directive({
  selector: '[appKendoSortable]',
  exportAs: 'appKendoSortable'
})
export class KendoSortableDirective extends KendoBaseDirective implements OnInit, OnDestroy {
  @Input() kendoSortableOptions: any = {};

  constructor(private el: ElementRef) {
    super(el, 'kendoSortable');
  }

  ngOnInit() {
    this.init(this.kendoSortableOptions);
  }

  ngOnDestroy() {
    this.destroy();
  }
}
