import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ModalModule } from 'ng2-bootstrap';

import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';

import { KendoUiModule } from '../kendo-ui';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { DateTimePickerComponent } from './datetimepicker/datetimepicker.component';
import { VideoplayerComponent } from './videoplayer/videoplayer.component';

import { ValidationErrorsComponent } from './validation-errors/validation-errors.component';
import { DropDownComponent } from './drop-down/drop-down.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ConfirmationService } from './confirmation/confirmation.service';


import { Map2ArrayPipe } from './pipes/map2array.pipe';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { SafePipe } from './pipes/safe.pipe';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

import { DurationPipe } from './pipes/duration.pipe';
import { HasErrorsPipe } from './pipes/has-errors.pipe';
import { FindFirstPipe } from './pipes/find-first.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ExcludePipe } from './pipes/exclude.pipe';
import { FieldTypePipe } from './pipes/field-type.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HighlightPipe } from './pipes/highlight.pipe';

import { SummernoteDirective } from './directives/summernote.directive';
import { DaypickerDirective } from './directives/daypicker.directive';
import { EmailValidatorDirective } from './directives/email-validator.directive';

import { PdfExporterService } from './services/pdf-exporter.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    DropDownsModule,
    DateInputsModule,

    ModalModule,

    KendoUiModule
  ],
  entryComponents: [ConfirmationComponent],
  declarations: [
    SummernoteDirective, DaypickerDirective, EmailValidatorDirective,
    DatepickerComponent, ValidationErrorsComponent, DropDownComponent, ConfirmationComponent,
    Map2ArrayPipe, DateFormatPipe, SafePipe, SafeUrlPipe, DurationPipe, HasErrorsPipe, FindFirstPipe, FilterPipe,
    ExcludePipe, FieldTypePipe, OrderByPipe, HighlightPipe, DateTimePickerComponent, VideoplayerComponent
  ],
  exports: [
    SummernoteDirective, DaypickerDirective, EmailValidatorDirective,
    DatepickerComponent, ValidationErrorsComponent, DropDownComponent, ConfirmationComponent,
    Map2ArrayPipe, DateFormatPipe, SafePipe, SafeUrlPipe, DurationPipe, HasErrorsPipe, FindFirstPipe, FilterPipe,
    ExcludePipe, FieldTypePipe, OrderByPipe, HighlightPipe, DateTimePickerComponent, VideoplayerComponent
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ConfirmationService, PdfExporterService
      ]
    };
  }
}


declare global {
  interface Array<T> {
    findById(id: any): T;
    findBy(field: string, value: any): T;
    removeById(id: any): void;
    removeBy(field: string, value: any): void;
    existsId(id: any): boolean;
    findAndRemove(search_term: any): void;
    findAndRemoveById(id: any): void;
  }
}

Array.prototype.findById = function (Id) {
  return this[this.map((x) => x.Id).indexOf(parseInt(Id, 10))];
};

Array.prototype.findBy = function (field, value) {
  return this[this.map(function (x) { return x[field]; }).indexOf(value)];
};

Array.prototype.removeById = function (id) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i].Id === id) {
      this.splice(i, 1);
    }
  }
};

Array.prototype.removeBy = function (field, key) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i][field] === key) {
      this.splice(i, 1);
    }
  }
};

Array.prototype.existsId = function (id) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].Id === id) {
      return true;
    }
  }
  return false;
};

Array.prototype.findAndRemove = function (search_term) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i] === search_term) {
      this.splice(i, 1);
    }
  }
};

Array.prototype.findAndRemoveById = function (id) {
  for (let i = this.length - 1; i >= 0; i--) {
    if (this[i].Id === id) {
      this.splice(i, 1);
    }
  }
};

