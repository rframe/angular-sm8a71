import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormExampleComponent } from './form-example.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormExampleComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [FormExampleComponent],
})
export class FormExampleModule {}
