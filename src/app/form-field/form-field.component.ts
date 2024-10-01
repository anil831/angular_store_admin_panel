import { Component, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NG_VALIDATORS, Validator, AbstractControl, NG_ASYNC_VALIDATORS, AsyncValidator } from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => FormFieldComponent),
      multi: true
    }
  ]
})
export class FormFieldComponent implements ControlValueAccessor, Validator, OnInit{
  @Input() id!: string;
  @Input() label!: string;
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() required: boolean = false;
  @Input() minlength?: number;
  @Input() maxlength?: number;

  value: any = '';
  errorMessage: string = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  private errorSubject = new Subject<void>();
  private readonly debounceTimeMs = 300; // Debounce time in milliseconds

  ngOnInit() {
    this.errorSubject.pipe(debounceTime(this.debounceTimeMs)).subscribe(() => {
      this.updateErrorMessage();
    });
  }

  writeValue(value: any): void {
    this.value = value;
    this.updateErrorMessage();
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Optional implementation
  }

  validate(control: AbstractControl): { [key: string]: any } | null {
    const errors: { [key: string]: any } = {};
    if (this.required && !control.value) {
      errors['required'] = 'This field is required.';
    }
    if (this.minlength && control.value && control.value.length < this.minlength) {
      errors['minlength'] = `Minimum length is ${this.minlength}.`;
    }
    if (this.maxlength && control.value && control.value.length > this.maxlength) {
      errors['maxlength'] = `Maximum length is ${this.maxlength}.`;
    }
    return Object.keys(errors).length ? errors : null;
  }

  private updateErrorMessage() {
    const errors = this.validate({ value: this.value } as AbstractControl);
    if (errors) {
      this.errorMessage = Object.values(errors).join(' ');
    } else {
      this.errorMessage = '';
    }
  }

  onModelChange(value: any) {
    this.value = value;
    this.errorSubject.next(); // Trigger validation with debounce
    this.onChange(value); // Notify change
  }
}
