import { Component, TemplateRef, ViewContainerRef , AfterViewInit, ViewChild } from '@angular/core';

// Define the movie interface
interface Movie {
  id: number;
  title: string;
  director: string;
}

@Component({
  selector: 'app-ng-template-example',
  templateUrl: './ng-template-example.component.html',
  styleUrls: ['./ng-template-example.component.css']
})
export class NgTemplateExampleComponent implements AfterViewInit{

  isVisble:boolean=false;
  currentView: string = 'default';

  setView(view: string) {
    this.currentView = view;
  }

   // Array of movies
   movies: Movie[] = [
    { id: 1, title: 'Inception', director: 'Christopher Nolan' },
    { id: 2, title: 'The Matrix', director: 'The Wachowskis' },
    { id: 3, title: 'Interstellar', director: 'Christopher Nolan' }
  ];


  trackById(index:number,movie:Movie){
    return movie.id
  }

  showContent:boolean=false;
   
    constructor(private viewContainerRef:ViewContainerRef){

    }

  @ViewChild("sampleTemplate1") sampleTemplate1!: TemplateRef<any>;


  currentTemplate!:TemplateRef<any>;
  @ViewChild("firstTemplate") firstTemplate!:TemplateRef<any>;
  @ViewChild("secondTemplate") secondTemplate!:TemplateRef<any>;
  
  switchTemplate(){
    this.currentTemplate = this.currentTemplate === this.firstTemplate ? this.secondTemplate : this.firstTemplate;
  }


  @ViewChild('dynamicTemplate', { static: true }) templateRef!: TemplateRef<any>;
  @ViewChild('container', { read: ViewContainerRef, static: true }) viewContainerRef2!: ViewContainerRef;

  dynamicContext: any = {};

  ngAfterViewInit(): void {
    //Here we are rendering template but not specifying where to render. this template occurs bottom of this html when it renders
    this.viewContainerRef.clear();
    this.viewContainerRef.createEmbeddedView(this.sampleTemplate1);


     // Set dynamic data context for the template
     this.dynamicContext = {
      data: {
        title: 'Dynamic Content Title',
        content: 'This content is rendered dynamically using Template reference variable, TemplateRef, and ViewContainerRef.'
      }
    };


    this.viewContainerRef2.clear(); // Clear existing content if any
    this.viewContainerRef2.createEmbeddedView(this.templateRef, this.dynamicContext);
  }

}






/*
explanation: trackBy is used to improve performance by specifying a unique identifier for each item. In this case, trackById uses the movie's id to track changes.
These are local variables you can use within the ng-container to access the current item (movie), the index (i), and whether the current item is even (isEven).
*/


/*
 ngAfterContent life cycle hook is Called once after the component’s view and its child views have been initialized. This is where you can safely access the component’s view and any child components and Directives

*/