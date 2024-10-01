import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './dash/dash.component';
import { SalesComponent } from './sales/sales.component';
import { ParentComponent } from './parent/parent.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { ParentFormComponent } from './parent-form/parent-form.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { Parent1Component } from './parent1/parent1.component';
import { NgTemplateExampleComponent } from './ng-template-example/ng-template-example.component';
import {CustomStylerParentComponent} from "./custom-styler-parent/custom-styler-parent.component";
import { DashboardForNotificationPanelComponent } from './dashboard-for-notification-panel/dashboard-for-notification-panel.component';
import { DashboardForWidgetComponent } from './dashboard-for-widget/dashboard-for-widget.component';
import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { TtClassComponent } from './tt-class/tt-class.component';
import { TtIfComponent } from './tt-if/tt-if.component';

const routes: Routes = [

  { path: 'dashboard', component: DashComponent },
  { path: 'sales', component: SalesComponent },
  {path:"parent",component:ParentComponent},
  {path:"tabs",component:TabContainerComponent},
  {path:"dynamic-form",component:ParentFormComponent},
  {path:"viewchild-parent",component:ViewchildParentComponent},
  {path:"user-profile-form",component:UserProfileFormComponent},
  {path:"parent1",component:Parent1Component},
  {path:"ng-template-example",component:NgTemplateExampleComponent},
  {path:"CustomStylerParentComponent",component:CustomStylerParentComponent},
  {path:"dashboardForNotificationPanel",component:DashboardForNotificationPanelComponent},
  {path:"dashboardForWidgetComponent",component:DashboardForWidgetComponent},
  {path:"dynamicForm2",component:DynamicFormContainerComponent},
  {path:"tooltipDemo",component:TooltipDemoComponent},
  {path:"ttClass",component:TtClassComponent},
  {path:"ttIf",component:TtIfComponent}
  // {path:"",redirectTo:"dashboard",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
