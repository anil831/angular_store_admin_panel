import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl:'./tab.component.html',
  styleUrls:['./tab.component.css']
})
export class TabComponent {
  @Input() tabTitle!: string;
  @Input() content!: TemplateRef<any>;
}
