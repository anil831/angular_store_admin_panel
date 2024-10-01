import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component {

  count:number=0;

  increment(){
    this.count++;
  }

  decrement(){
    this.count--;
  }
}
