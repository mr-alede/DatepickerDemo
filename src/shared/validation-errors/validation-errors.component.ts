import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-validation-errors',
  templateUrl: './validation-errors.component.html'
})
export class ValidationErrorsComponent implements OnInit {
  @Input() model: NgModel;
  @Input() validate = false;


  constructor() { }

  ngOnInit() {
  }
}
