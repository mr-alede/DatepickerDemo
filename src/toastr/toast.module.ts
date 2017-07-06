import { NgModule, ModuleWithProviders, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastContainerComponent } from './toast-container.component';
import { ToastsManager } from './toasts-manager';
import { ToastOptions } from './toast-options';

import { TooltipModule } from 'ng2-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    TooltipModule
  ],
  declarations: [ToastContainerComponent],
  exports: [ToastContainerComponent],
  entryComponents: [ToastContainerComponent]
})
export class ToastModule {
  public static forRoot(config: ToastOptions): ModuleWithProviders {
    return {
      ngModule: ToastModule,
      providers: [
        ToastsManager,
        { provide: ToastOptions, useValue: config }
      ]
    };
  }
}
