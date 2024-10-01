import { Component, ContentChildren, QueryList, ElementRef, AfterContentInit, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.css']
})
export class NotificationPanelComponent implements AfterContentInit, AfterContentChecked{
  @ContentChildren('notification') notifications!:QueryList<ElementRef>;
  showPanel: boolean = false;

  ngAfterContentInit(): void {
    this.updateVisibility();
  }
  ngAfterContentChecked(): void {
    this.updateVisibility();
  }

  private updateVisibility(){
    if(this.notifications.length>0){
      this.showPanel = true;
    }else{
      this.showPanel = false;
    }
  }

}
