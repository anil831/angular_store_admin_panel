import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-viewchild-child',
  templateUrl: './viewchild-child.component.html',
  styleUrls: ['./viewchild-child.component.css']
})
export class ViewchildChildComponent {
  //querying DOM Elemeny with ViewChild to get a reference to it in ts file
  @ViewChild('inputElement',{static:false,read:ElementRef}) inputElement!:ElementRef<HTMLInputElement>
  clearInput():void{
    this.inputElement.nativeElement.value = '';
  }

  setInput(value:string):void{
    this.inputElement.nativeElement.value = value;
  }

  focusInput(){
    this.inputElement.nativeElement.focus();
  }
}
