import { Component, OnInit, HostBinding, ViewChild, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

import { ModalDirective } from 'ng2-bootstrap/modal';


@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent implements OnInit {
  @ViewChild('modal') public modal: ModalDirective;
  @Output() modalComponent = new EventEmitter<ConfirmationComponent>();

  message = '';

  resultObserver: Observer<boolean>;

  constructor() { }

  ngOnInit() {
    this.modalComponent.emit(this);
  }

  open(message: string): Observable<boolean> {
    this.message = message;
    this.modal.show();

    return Observable.create(observer => this.resultObserver = observer);
  }

  ok() {
    this.modal.hide();
    this.resultObserver.next(true);
    this.resultObserver.complete();
  }

  cancel() {
    this.modal.hide();
    this.resultObserver.next(false);
    this.resultObserver.complete();
  }

}
