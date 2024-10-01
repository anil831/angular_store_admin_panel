import { Component, ViewChild, AfterViewInit } from '@angular/core';
import {ViewchildChildComponent} from "../viewchild-child/viewchild-child.component";
import { HighlightDirective } from '../highlight.directive';

@Component({
  selector: 'app-viewchild-parent',
  templateUrl: './viewchild-parent.component.html',
  styleUrls: ['./viewchild-parent.component.css']
})
export class ViewchildParentComponent implements AfterViewInit {

  @ViewChild(ViewchildChildComponent) viewchildChildComponent!: ViewchildChildComponent;

  clearChildInput(){
    this.viewchildChildComponent.clearInput();
  }

  setChildInput(){
    this.viewchildChildComponent.setInput("New value");
  }

  focusChildInput(){
    this.viewchildChildComponent.focusInput();
  }


  @ViewChild(HighlightDirective) highlightDirective!: HighlightDirective;
  ngAfterViewInit() {
    // You can access the directive's properties and methods here
    console.log(this.highlightDirective.color);
  }

  changeColor() {
    this.highlightDirective.setColor('orange');
  }
}
