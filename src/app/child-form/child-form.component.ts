import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-child-form',
  templateUrl: './child-form.component.html',
  styleUrls: ['./child-form.component.css']
})
export class ChildFormComponent implements OnInit{
  @Input() fieldLabel!: string;
  @Input() fieldType!: string;
  @Input() fieldPlaceholder!: string;
  @Input() fieldKey!: string;
  @Input() required!: boolean;

  @Output() formStatusChanged = new EventEmitter<boolean>();

  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      [this.fieldKey]: new FormControl('', this.required ? Validators.required : null)
    });

    this.formGroup.statusChanges.subscribe(status => {
      console.log("event is about to be emitted");
      
      this.formStatusChanged.emit(this.formGroup.valid);
    });
  }

  get isValid() {
    return this.formGroup.valid;
  }
}
