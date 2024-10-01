import { Component, AfterContentInit, AfterContentChecked, ContentChild, ElementRef, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-custom-styler-child',
  templateUrl: './custom-styler-child.component.html',
  styleUrls: ['./custom-styler-child.component.css'],
  //encapsulation: ViewEncapsulation.None // Optional: Use None for global styles
  encapsulation:ViewEncapsulation.ShadowDom

})
export class CustomStylerChildComponent implements AfterContentInit, AfterContentChecked{
  @ContentChild('dynamicContent',{static:false}) dynamicContent!:ElementRef<any> 

  constructor(private render:Renderer2){}

 ngAfterContentInit(): void {
    console.log("ngAfterContentInit is invoked");
    
    this.applyInitialStyles();
  }
  
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked is invoked");

    this.updateStyles();
  }

  private applyInitialStyles(){
    // i want styles to be same for intial content project and subsequent content projection. 
    console.log("this.dynamicContent :",this.dynamicContent);
    
    if(this.dynamicContent){
      this.updateStyles()

    }
  }

  private updateStyles(){
    if(this.dynamicContent){
      const content  = this.dynamicContent.nativeElement.textContent;
      console.log("content:",content);
      
      if(content.includes('important')){
        this.render.addClass(this.dynamicContent.nativeElement,'highlight');
        this.render.removeClass(this.dynamicContent.nativeElement,'fade');
      }else{
        this.render.addClass(this.dynamicContent.nativeElement,'fade');
        this.render.removeClass(this.dynamicContent.nativeElement,'highlight')
      }
    }
  }
}
