import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {MyAsyncValidator} from '../shared/validators/my-async.validator';
import {CustomErrorStateMatcher} from '../shared/validators/error-state-matchers';

/**
 * @title Input with a clear button
 */
@Component({
  selector: 'form-example',
  templateUrl: 'form-example.component.html',
  styleUrls: ['form-example.component.scss'],
})
export class FormExampleComponent implements OnInit{
  form: FormGroup;
  validStatus: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED' = 'VALID';
  pendingStatus: 'VALID' | 'INVALID' | 'PENDING' | 'DISABLED' = 'PENDING';
  errorStateMatcher = new CustomErrorStateMatcher();
  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      'textBox': new FormControl(null, [MyAsyncValidator.shouldBeValid], []),
      'asyncTextBox': new FormControl(null, [], [MyAsyncValidator.shouldBeValidAsync])
    });
  }
}
