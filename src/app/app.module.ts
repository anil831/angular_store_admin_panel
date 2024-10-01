import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgChartsModule } from 'ng2-charts';
import { NavComponent } from './nav/nav.component';
import { DashComponent } from './dash/dash.component';
import { CardComponent } from './card/card.component';
import { ProductSalesChartComponent } from './charts/product-sales-chart/product-sales-chart.component';
import { SalesTrafficChartComponent } from './charts/sales-traffic-chart/sales-traffic-chart.component';
import { AnnualSalesChartComponent } from './charts/annual-sales-chart/annual-sales-chart.component';
import { StoreSessionsChartComponent } from './charts/store-sessions-chart/store-sessions-chart.component';
import { SalesComponent } from './sales/sales.component';
import { OrdersTableComponent } from './orders-table/orders-table.component';
import { ClientDashboardComponent } from './client-dashboard/client-dashboard.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatStepperModule} from '@angular/material/stepper';
import { ParentComponent } from './parent/parent.component';
import { StringDisplayComponent } from './string-display/string-display.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';
import { TabContainerComponent } from './tab-container/tab-container.component';
import { ChildFormComponent } from './child-form/child-form.component';
import { ParentFormComponent } from './parent-form/parent-form.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ViewchildChildComponent } from './viewchild-child/viewchild-child.component';
import { ViewchildParentComponent } from './viewchild-parent/viewchild-parent.component';
import { HighlightDirective } from './highlight.directive';
import { FormControlDirective } from './form-control.directive';
import { UserProfileFormComponent } from './user-profile-form/user-profile-form.component';
import { Child1Component } from './child1/child1.component';
import { Parent1Component } from './parent1/parent1.component';
import { NgTemplateExampleComponent } from './ng-template-example/ng-template-example.component';
import { CustomStylerParentComponent } from './custom-styler-parent/custom-styler-parent.component';
import { CustomStylerChildComponent } from './custom-styler-child/custom-styler-child.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { DashboardForNotificationPanelComponent } from './dashboard-for-notification-panel/dashboard-for-notification-panel.component';
import { WidgetComponent } from './widget/widget.component';
import { DashboardForWidgetComponent } from './dashboard-for-widget/dashboard-for-widget.component';
import { FormFieldComponent } from './form-field/form-field.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFormContainerComponent } from './dynamic-form-container/dynamic-form-container.component';
import { TooltipDirective } from './directives/tooltip.directive';
import { TooltipDemoComponent } from './tooltip-demo/tooltip-demo.component';
import { TtClassDirective } from './directives/tt-class.directive';
import { TtClassComponent } from './tt-class/tt-class.component';
import { TtIfDirective } from './directives/tt-if.directive';
import { TtIfComponent } from './tt-if/tt-if.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashComponent,
    CardComponent,
    ProductSalesChartComponent,
    SalesTrafficChartComponent,
    AnnualSalesChartComponent,
    StoreSessionsChartComponent,
    SalesComponent,
    OrdersTableComponent,
    ClientDashboardComponent,
    ParentComponent,
    StringDisplayComponent,
    TabsComponent,
    TabComponent,
    TabContainerComponent,
    ChildFormComponent,
    ParentFormComponent,
    ViewchildChildComponent,
    ViewchildParentComponent,
    HighlightDirective,
    FormControlDirective,
    UserProfileFormComponent,
    Child1Component,
    Parent1Component,
    NgTemplateExampleComponent,
    CustomStylerParentComponent,
    CustomStylerChildComponent,
    NotificationPanelComponent,
    DashboardForNotificationPanelComponent,
    WidgetComponent,
    DashboardForWidgetComponent,
    FormFieldComponent,
    DynamicFormComponent,
    DynamicFormContainerComponent,
    TooltipDirective,
    TooltipDemoComponent,
    TtClassDirective,
    TtClassComponent,
    TtIfDirective,
    TtIfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgChartsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTabsModule,
    MatTooltipModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
