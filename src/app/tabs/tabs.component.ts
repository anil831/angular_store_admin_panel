import { Component, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs',
  template: `
    <div class="tabs">
      <div class="tab" *ngFor="let tab of tabs; let i = index" (click)="selectTab(tab.tabTitle)" [class.active]="tab.tabTitle === selectedTab">
        {{ tab.tabTitle }}
      </div>
    </div>
    <div class="tab-content">
      <ng-container *ngFor="let tab of tabs">
        <div *ngIf="tab.tabTitle === selectedTab">
          <ng-container *ngTemplateOutlet="tab.content"></ng-container>
        </div>
      </ng-container>
    </div>
  `,
  styles: [
    `
    .tabs {
      display: flex;
    }
    .tab {
      padding: 10px;
      cursor: pointer;
    }
    .tab.active {
      background-color: lightblue;
    }
    .tab-content {
      margin-top: 10px;
    }
    `
  ]
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabComponents!: QueryList<TabComponent>;
  tabs: { tabTitle: string, content: any }[] = [];
  selectedTab: string = ''; // Initialize selectedTab

  constructor() { }

  ngAfterContentInit() {
    this.tabs = this.tabComponents.map(tab => ({ tabTitle: tab.tabTitle, content: tab.content }));
    // Initialize selectedTab with the first tab title
    if (this.tabs.length > 0) {
      this.selectedTab = this.tabs[0].tabTitle;
    }
  }

  selectTab(tabTitle: string) {
    this.selectedTab = tabTitle;
  }
  
}
