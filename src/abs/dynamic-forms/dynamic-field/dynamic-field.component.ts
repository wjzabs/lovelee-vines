import { FieldDefinition } from 'abs/dynamic-forms/field-definition';
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'abs-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent implements OnInit {
  @Input() field: FieldDefinition;
  @Input() form: FormGroup;
  @Input() operation: string;
  @Input() submitted: boolean;

  get isValid() { return this.form.controls[this.field.key].valid;}

  constructor() { }

  ngOnInit() {
  }
}