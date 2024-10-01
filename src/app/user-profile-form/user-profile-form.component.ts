import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {FormControlDirective} from "../form-control.directive";
@Component({
  selector: 'app-user-profile-form',
  templateUrl: './user-profile-form.component.html',
  styleUrls: ['./user-profile-form.component.css']
})
export class UserProfileFormComponent implements AfterViewInit{

  @ViewChild('usernameControl') usernameDirective!:FormControlDirective
  @ViewChild('emailControl') emailDirective!:FormControlDirective

  form!:FormGroup;
  constructor(private fb:FormBuilder){
    this.form = this.fb.group({
      username:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]]
    })
  }
  ngAfterViewInit(): void {
    this.usernameDirective.markAsTouched();
    this.emailDirective.markAsTouched();
  }

  onSubmit(){
    if(this.form.valid){
      console.log("Form Submitted", this.form.value);
    }else{
      console.log("Form is invalid");
      
    }
  }

  
}
