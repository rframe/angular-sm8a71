import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
  Validators
} from '@angular/forms';
import {delay, Observable, of} from 'rxjs';

export class MyAsyncValidator extends Validators implements AsyncValidator {
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null>;
  validate(control: AbstractControl): ValidationErrors | null;
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> | ValidationErrors | null {
    if (!control?.dirty) {
      return of(null);
    }
    return of(this.shouldBeValidValidate(control))
      .pipe(
        delay(60000)
      );
  }

  shouldBeValidValidate(control: AbstractControl) {
    const expectedvalue = 'valid';
    const {value} = control;
    return !value?.length || value === expectedvalue ? null : {'shouldBeValid': expectedvalue, value};
  }

  static shouldBeValidAsync(control: AbstractControl) {
    return new MyAsyncValidator().validate(control);
  }

  static shouldBeValid(control: AbstractControl) {
    return new MyAsyncValidator().shouldBeValidValidate(control);
  }


}


