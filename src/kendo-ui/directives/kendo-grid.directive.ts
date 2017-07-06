import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy, HostBinding, OnChanges } from '@angular/core';

import { KendoBaseDirective } from './kendo-base.directive';

@Directive({
  selector: '[appKendoGrid]',
  exportAs: 'appKendoGrid'
})
export class KendoGridDirective extends KendoBaseDirective implements OnInit, OnDestroy, OnChanges {
  @Input() options: any = {};
  @Input() dataSource: any;

  constructor(private el: ElementRef) {
    super(el, 'kendoGrid');
  }

  ngOnInit() {
    this.init(this.options);
  }

  ngOnDestroy() {
    this.destroy();
  }

  ngOnChanges(changes: any) {
    if (changes.dataSource && changes.dataSource.currentValue) {
      this.setDataSource(changes.dataSource.currentValue);
    }
  }

  setDataSource(dataSource: any) {
    if (this.widget) {
      this.widget.dataSource(dataSource);
    }
  }

  pdfExport() {
    this.widget.saveAsPDF();
  }

  excelExport() {
    this.widget.saveAsExcel();
  }

  resize() {
    this.widget.resize();
  }
}
