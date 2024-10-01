import { Component, OnChanges, SimpleChanges, Input, DoCheck, KeyValueDiffers, KeyValueDiffer } from '@angular/core';
import { EqualityCheckService } from '../utils/equality-check.service'; 

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
  selector: 'app-string-display',
  templateUrl: './string-display.component.html',
  styleUrls: ['./string-display.component.css']
})
export class StringDisplayComponent implements OnChanges, DoCheck {

  private differ: KeyValueDiffer<string, any> | undefined;

  constructor(private equalityCheckService:EqualityCheckService, private differs: KeyValueDiffers){}

  @Input() stringValue:string | undefined;

  @Input() user: User | undefined;
    
  @Input() data: any; // Assuming data is of type 'any'
  private previousData: any;

  @Input() items!: Item[] | undefined;
  private previousItems!: Item[] | undefined ;

  
  ngOnChanges(changes: SimpleChanges): void {


    if(changes['stringValue']){
      console.log('stringValue changed : ', changes['stringValue'].currentValue);
    }

    if(changes['user']){
      console.log('user changed : ', changes['user'].currentValue);
    }


  }

 
  //Method 1: deep checking to identify changes in nested arrays or objects 

  // ngDoCheck(): void {
    
  //   //checking changes to data
  //   if(!this.previousData && !!Object.keys(this.data).length){
  //     //if previousData is undefiend
  //     this.previousData = JSON.parse(JSON.stringify(this.data))
  //     console.log("previousData empty. Using deep copy technique copied data value into previousData");

  //   }else if(this.data!==this.previousData){
      
  //     if(!this.equalityCheckService.objectsEqual(this.data,this.previousData)){
  //       console.log("data changed",this.data); 
  //       //perform deep copy
  //       this.previousData = JSON.parse(JSON.stringify(this.data));
  //     }

  //   }

  //   //checking changes to items

  //   if(!this.previousItems && this.items?.length){
  //     //if previousData is undefiend
  //     this.previousItems = [...this.items] ; 
  //     console.log("previousItems empty. copied items value into previousItems",this.previousItems);

  //   }else if(this.items!==this.previousItems){
      
  //     if(!this.equalityCheckService.objectsEqual(this.items,this.previousItems)){
  //       console.log("items changed: ", this.items); 
  //       this.previousItems = this.items ? [...this.items] : []; 

        
  //     }

  //   }


  // }


  //Method 2: code to identify change in flat javascript objects

  //detect changes in key-value pairs of flat object
  // ngDoCheck(): void {
  //   if (this.data) {
  //     if (!this.differ) {
  //       this.differ = this.differs.find(this.data).create();
  //     }
  //     const changes = this.differ.diff(this.data);

  //     if (changes) {
  //       console.log('Data has changed:');
  //       changes.forEachItem(item => {
  //         console.log(`Key: ${item.key}, Previous Value: ${item.previousValue}, Current Value: ${item.currentValue}`);
  //       });
  //     }
  //   }
  // }

  
  //Method 3: JSN

  ngDoCheck(): void {
    if (JSON.stringify(this.previousData) !== JSON.stringify(this.data)) {
      console.log("data changed");
      console.log("previous data:", this.previousData);
      console.log("current data:", this.data);
      

      this.previousData = JSON.parse(JSON.stringify(this.data));
    }else{
      console.log("data not changed");   
    }
  }


}
