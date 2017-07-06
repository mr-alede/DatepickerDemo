import { Injectable } from '@angular/core';

@Injectable()
export class ToastOptions {
  positionClass = 'toast-bottom-right';
  maxShown = 5;
  newestOnTop = false;
  animate = 'fade';

  // override-able properties
  toastLife = 5000;
  enableHTML = false;
  dismiss = 'auto'; // 'auto' | 'click' | 'controlled'
  messageClass = 'toast-message';
  titleClass = 'toast-title';
  showCloseButton = false;

  constructor() { }

}
