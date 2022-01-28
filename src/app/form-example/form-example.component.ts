import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'form-example',
  templateUrl: 'form-example.component.html',
  styleUrls: ['form-example.component.scss'],
})
export class FormExampleComponent {
  control: FormControl;

  constructor(private fb: FormBuilder) {
    this.control = fb.control({ value: 'my val', disabled: true });
  }
}
