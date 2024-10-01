import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClientDashboardService } from './shared/client-dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'store-admin-panel';
  constructor(private router:Router,public clientDashboardService:ClientDashboardService){
   console.log("app component cereated");
   
  }
  ngOnInit(): void {
  this.clientDashboardService.isUserOnClientDashboard = false;
  }
  clientDashboardClicked(){
    this.clientDashboardService.isUserOnClientDashboard = true;

    // this.router.navigate(["clientDashboard"])
  }
}
