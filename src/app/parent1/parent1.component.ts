import { Component, ElementRef, ViewChild } from '@angular/core';
import {Child1Component} from "../child1/child1.component";
@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component {

  //static:true will resolves ViewChild before any change detection is run.
  //static:false will resolves it after every change detection run.

  //the first argument we passed is Child1Component . It is a component type. 
  //You can make use of Template Reference Variable instead of the component type.
  //<child-component #child></child-component>

  // Component instance example
  @ViewChild(Child1Component,{static:true}) child!: Child1Component;
 
  // ElementRef example (direct DOM access)
  @ViewChild("myDiv",{static:true}) myDiv!:ElementRef
  constructor(){
       //angular resolves ViewCild or ViewChildren only after the constructor has executed. during the execution of constructor ViewChild or ViewChildren properties are undefined
      // console.log("count: ",this.child.count);
      // console.log("myDiv :",this.myDiv); // ElementRef object
    
  }

  increment() {
    this.child.increment();
  }
 
  decrement() {
    this.child.decrement();
  }


}
