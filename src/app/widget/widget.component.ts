import { Component, Input, ContentChild, ElementRef, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-widget',
  templateUrl: './widget.component.html',
  styleUrls: ['./widget.component.css']
})
export class WidgetComponent implements AfterContentInit, AfterContentChecked {

  @Input() highlight:boolean = false;
  @ContentChild('widgetContent') content!: ElementRef;

  ngAfterContentInit(): void {
    this.applyConditionalStyles();
  }
  ngAfterContentChecked(): void {
    this.applyConditionalStyles();
  }

  private applyConditionalStyles(){
    if(this.content){
      if(this.highlight){
        this.content.nativeElement.classList.add('highlight');
        this.content.nativeElement.classList.remove('normal');
      }else{
        this.content.nativeElement.classList.remove('highlight');
        this.content.nativeElement.classList.add('normal');
      }
    }
  }
}
