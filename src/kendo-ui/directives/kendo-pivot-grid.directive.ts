import { Directive, ElementRef, HostListener, Input, OnInit, OnDestroy, HostBinding, OnChanges } from '@angular/core';

import { KendoBaseDirective } from './kendo-base.directive';

@Directive({
  selector: '[appKendoPivotGrid]',
  exportAs: 'appKendoPivotGrid'
})
export class KendoPivotGridDirective extends KendoBaseDirective implements OnInit, OnDestroy, OnChanges {
  @Input() pivotOptions: any = {};
  @Input() dataSource: any;

  constructor(private el: ElementRef) {
    super(el, 'kendoPivotGrid');
  }

  ngOnInit() {
    this.init(this.pivotOptions);
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
      this.widget.setDataSource(dataSource);
    }
  }

  pdfExport() {
    this.widget.saveAsPDF();
  }

  excelExport() {
    this.widget.saveAsExcel();
  }
}
