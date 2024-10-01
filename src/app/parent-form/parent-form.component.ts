import { AfterViewInit, Component, QueryList, ViewChildren } from '@angular/core';
import { ChildFormComponent } from '../child-form/child-form.component';

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrls: ['./parent-form.component.css']
})
export class ParentFormComponent implements AfterViewInit {
  //accessing the component instance
  @ViewChildren(ChildFormComponent) childForms!: QueryList<ChildFormComponent>;
  fields = [
    { label: 'Name', type: 'text', placeholder: 'Enter your name', key: 'name', required: true },
    { label: 'Email', type: 'email', placeholder: 'Enter your email', key: 'email', required: true },
    { label: 'Age', type: 'number', placeholder: 'Enter your age', key: 'age', required: false }
  ];
  
  isFormValid = false;
  formSubmitted = false;

  ngAfterViewInit() {
    this.childForms.changes.subscribe(() => {
      this.updateFormValidity();
    });
  }

  onFormStatusChanged(isValid: boolean) {
    this.updateFormValidity();
  }

  updateFormValidity() {
    this.isFormValid = this.childForms.toArray().every(child => child.isValid);
  }

  submitForm() {
    if (this.isFormValid) {
      // Handle form submission logic here
      this.formSubmitted = true;
    }
  }
}
