import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import * as $ from 'jquery';

import '@progress/kendo-ui/js/kendo.pdf';
import '@progress/kendo-ui/js/kendo.excel';

import '@progress/kendo-ui/js/kendo.data';

import '@progress/kendo-ui/js/kendo.sortable';
import '@progress/kendo-ui/js/kendo.pivotgrid';
import '@progress/kendo-ui/js/kendo.pivot.fieldmenu';
import '@progress/kendo-ui/js/kendo.pivot.configurator';

import '@progress/kendo-ui/js/kendo.grid';
import '@progress/kendo-ui/js/kendo.filtercell';

import '@progress/kendo-ui/js/kendo.datetimepicker';
import '@progress/kendo-ui/js/kendo.datepicker';

// import '@progress/kendo-ui/js/kendo.editor';

import { KendoPivotGridDirective } from './directives/kendo-pivot-grid.directive';
import { KendoGridDirective } from './directives/kendo-grid.directive';
import { KendoEditorDirective } from './directives/kendo-editor.directive';
import { KendoSortableDirective } from './directives/kendo-sortable.directive';
import { KendoDateTimePickerDirective } from './directives/kendo-datetimepicker.directive';
import { KendoDatePickerDirective } from './directives/kendo-datepicker.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    KendoPivotGridDirective, KendoGridDirective, KendoEditorDirective, KendoSortableDirective,
    KendoDateTimePickerDirective, KendoDatePickerDirective
  ],
  exports: [
    KendoPivotGridDirective, KendoGridDirective, KendoEditorDirective, KendoSortableDirective,
    KendoDateTimePickerDirective, KendoDatePickerDirective
  ]
})
export class KendoUiModule {
}
