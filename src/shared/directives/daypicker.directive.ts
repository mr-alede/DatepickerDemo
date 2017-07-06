import {
    Directive, ElementRef, HostListener, Input, OnInit, OnDestroy,
    HostBinding, OnChanges, EventEmitter, Output
} from '@angular/core';

import * as $ from 'jquery';

declare var daypicker;

@Directive({
    selector: '[appDaypicker]',
    exportAs: 'appDaypicker'
})
export class DaypickerDirective implements OnInit, OnDestroy, OnChanges {
    $element: any;
    widget: any;

    options = {
        styles: {
            checkbox: 'inspinia-checkbox'
        }
    };

    @Input() value: string;
    @Output() valueChange = new EventEmitter<string>();

    constructor(private el: ElementRef) {
        this.$element = $(el.nativeElement);
    }

    ngOnInit() {
        this.widget = daypicker(this.$element[0], this.options);

        this.$element.on('change', this.change.bind(this));
    }

    ngOnDestroy() {
        this.widget.destroy();
    }

    ngOnChanges(changes: any) {
        if (changes.value) {
            this.$element.val(changes.value.currentValue);
        }
    }

    change(e) {
        if (e.detail) {
            this.value = e.detail.value;
            this.valueChange.emit(e.detail.value);
        }
    }

}
