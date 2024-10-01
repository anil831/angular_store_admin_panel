import { Directive, ElementRef, Renderer2, OnInit, Input } from '@angular/core';
import {NgControl} from "@angular/forms";
@Directive({
  selector: '[appFormControl]'
})
export class FormControlDirective implements OnInit {

  @Input() appFormControl:any // This could be a custom validation rule or config

  constructor(private el:ElementRef, private renderer:Renderer2, private control:NgControl) { }

  ngOnInit(): void {
        // Apply initial styling or validation
        this.setValidationStyles();

        this.control.control?.valueChanges.subscribe(()=>{
          this.setValidationStyles();
        })

  }

  setValidationStyles(){

    if(this.control.control?.invalid){
      this.renderer.setStyle(this.el.nativeElement,"border","2px solid red");
    }else{
      this.renderer.removeStyle(this.el.nativeElement,"border")
    }

  }


  markAsTouched(){
    this.control.control?.markAsTouched();
  }
}
