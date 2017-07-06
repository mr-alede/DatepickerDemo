import {
  Directive, ElementRef, HostListener, Input, OnInit, OnDestroy,
  HostBinding, OnChanges, EventEmitter, Output
} from '@angular/core';

import * as $ from 'jquery';
import 'bootstrap';
import 'summernote';


@Directive({
  selector: '[appSummernote]',
  exportAs: 'appSummernote'
})
export class SummernoteDirective implements OnInit, OnDestroy, OnChanges {
  $element: any;
  widget: any;

  @Input() options: any = {};

  @Input() value: string;
  @Output() valueChange = new EventEmitter<string>();

  constructor(private el: ElementRef) {
    this.$element = $(el.nativeElement);
  }

  ngOnInit() {
    this.widget = this.$element['summernote'](this.options).data('summernote');

    this.$element.on('summernote.change', this.change.bind(this));
  }

  ngOnDestroy() {
    this.widget.destroy();
  }

  ngOnChanges(changes: any) {
    if (changes.value && this.$element.summernote('code') !== changes.value.currentValue) {
      this.$element.summernote('code', changes.value.currentValue);
    }
  }

  change(we, contents, $editable) {
    this.value = contents;
    this.valueChange.emit(contents);
  }
}
