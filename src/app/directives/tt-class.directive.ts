import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTtClass]'
})
export class TtClassDirective implements OnInit {

  //our directive needs to take the class name as the input
  //using same name as the selector enable us to use the property binding.
  @Input() appTtClass!: any;

  constructor(private el:ElementRef) { }

  ngOnInit(): void {

    console.log(typeof this.appTtClass);
    
    if(this.appTtClass){

      if(typeof this.appTtClass === 'string'){
        const appTtClasses = this.appTtClass.split(" ");
        if(appTtClasses.length>1){
          appTtClasses.forEach(ttclass => {
            this.el.nativeElement.classList.add(ttclass);
          })
          
  
        }else{
          this.el.nativeElement.classList.add(this.appTtClass);
  
        }
      }else if(typeof this.appTtClass === 'object'){

        if(Array.isArray(this.appTtClass)){
          this.appTtClass.forEach(ttclass => {
            this.el.nativeElement.classList.add(ttclass);
          })
        }else{
          console.log("else block");
          
         const keyValues = Object.entries(this.appTtClass);

         keyValues.forEach(keyValue => {
          console.log("keyValue:",keyValue);
          
          if(keyValue[1]){
            this.el.nativeElement.classList.add(keyValue[0]);
          }else{
            this.el.nativeElement.classList.remove(keyValue[0]);
          }
          
        })
         
        }
      }
    

    }

  }

}
