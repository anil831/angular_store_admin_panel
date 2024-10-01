import { AfterContentInit, AfterContentChecked, Component, ContentChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field.component';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements AfterContentInit, AfterContentChecked  {
  @ContentChildren(FormFieldComponent) formFields!: QueryList<FormFieldComponent>;
  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngAfterContentInit() {
    this.initializeForm();
  }

  ngAfterContentChecked() {
    this.updateFormControls();
  }

  private initializeForm() {
    const controls = this.formFields.toArray();
    const formGroup: { [key: string]: FormControl } = {};

    controls.forEach(field => {
      formGroup[field.id] = new FormControl(field.value || '', this.getValidators(field));
    });

    this.form = this.fb.group(formGroup);
  }

  private updateFormControls() {
    const controls = this.formFields.toArray();
    controls.forEach(field => {
      const control = this.form.get(field.id);
      if (control) {
        control.setValidators(this.getValidators(field));
        control.updateValueAndValidity();
      }
    });
  }

  private getValidators(field: FormFieldComponent) {
    const validators = [];
    if (field.required) validators.push(Validators.required);
    if (field.minlength) validators.push(Validators.minLength(field.minlength));
    if (field.maxlength) validators.push(Validators.maxLength(field.maxlength));
    return validators;
  }

  submit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    }
  }
}
