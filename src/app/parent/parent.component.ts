import { Component } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}


interface Item{
  id: number;
  name: string;
}
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {

  stringValue:string = 'Initial Value';

  updateStringValue():void{
    this.stringValue = this.stringValue.concat(this.stringValue.length.toString());
  }


   currentUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com'
  };


  changeUserEmail() {
    // this.currentUser.email = 'updated.email@example.com'; 
    // updating input property content will not trigger ngOnChanges hook in child component. 

    this.currentUser = { ...this.currentUser, email: 'updated.email@example.com' };
    //updating references to the child component input property trigger ngOnChanges in child component. spread operator is used to copy object.

  }


  data = {
    id: 1,
    name: 'Initial Name',
    description: 'Initial Description',
    category: 'Initial Category',
    isActive: true,
    createdDate: '2023-01-01',
    updatedDate: '2023-01-01',
    hobbies:[{id:1,name:"movies"},{id:2,name:"songs"}]
  };

  updateData() {
    //this.data.name = 'Updated Name'; // Simulating a change in property
    //this.data.isActive = !this.data.isActive; // Simulating another change in property
    this.data.hobbies.push({id:this.data.hobbies.length+1,name:"new hobbie"}); // Simulating an array
  }

  items: Item[] = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' }
  ];

  addItem() {
    this.items.push({ id: this.items.length + 1, name: `Item ${this.items.length + 1}` });
  }
  
}
