import { LOCATION_INITIALIZED } from '@angular/common';
import { DatepickerModule, CollapseModule, ModalModule, TooltipModule, AccordionModule, TabsModule } from 'ng2-bootstrap';

import { Http } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, ModuleWithProviders, NgModule, Injector } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';

// Kendo
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import 'hammerjs';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    DateInputsModule,

    FormsModule,

    DatepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AccordionModule.forRoot(),
    TabsModule.forRoot(),
    CollapseModule,

    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB5YNhnQgbFqaPfQIUjOsoUGMBCGo1eYNM'
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
