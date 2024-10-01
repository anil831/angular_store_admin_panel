import { Component } from '@angular/core';
import { ClientDashboardService } from '../shared/client-dashboard.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent {
  constructor(private _ClientDashboardService:ClientDashboardService){
    this._ClientDashboardService.isUserOnClientDashboard=true;
    
  }
}
