import { Component, ViewEncapsulation, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { ClientDashboardService } from '../shared/client-dashboard.service';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  appComponet!:AppComponent;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products','home'];
    selectedItem: string | null = null;


    constructor(private router:Router,private _ClientDashboardService:ClientDashboardService){
      this.selectedItem="dashboard";
      this.router.navigate(["/dashboard"])
    }

  isSelectedItem(item: string): boolean {
    console.log(this.selectedItem, item);
    return this.selectedItem === item;
  }
    getRouterLink(item:string) {
      
      this.selectedItem = item;

      if(item=="home"){
        this._ClientDashboardService.isUserOnClientDashboard=false;
        this.router.navigate(["/"]);
      }else{
         this.router.navigate(["/"+item])

      }
    }

}
