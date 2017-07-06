import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent implements OnInit {
  _model: Date;

  @Input()
  get model() {
    return this._model;
  }

  @Output() modelChange = new EventEmitter();
  set model(val) {
    if (val !== this._model) {
      this._model = val;
      this.modelChange.emit(this._model);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}
