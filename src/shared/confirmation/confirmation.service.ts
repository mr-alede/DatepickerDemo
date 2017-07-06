import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ConfirmationComponent } from './confirmation.component';

@Injectable()
export class ConfirmationService {
  private modal: ConfirmationComponent;

  constructor() {  }

  public init(modal: ConfirmationComponent) {
    this.modal = modal;
  }


  public show(message: string): Observable<boolean> {
    return this.modal.open(message);
  }
}
