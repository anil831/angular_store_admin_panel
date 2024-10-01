import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver,BreakpointState } from '@angular/cdk/layout';

import {Observable} from "rxjs";
import { map } from 'rxjs/operators';
import { ClientDashboardService } from '../shared/client-dashboard.service';

interface CardLayout {

  columns: number;
  miniCard: { cols: number, rows: number };
  chart: { cols: number, rows: number };
  table: { cols: number, rows: number };

}
@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  private breakpointObserver = inject(BreakpointObserver);
  noOfCards:number[] = [1, 2, 3, 4, 5, 6];


  cardLayout:Observable<CardLayout> = this.breakpointObserver.observe(
    [
      '(max-width: 431px)',
      '(max-width: 541px)',
      '(max-width: 821px)',
      '(max-width: 1025px)',
       Breakpoints.XLarge
    ]
  ).pipe(
    map((result:BreakpointState) => {

      
      if (result.breakpoints['(max-width: 431px)']) {
        return {
          columns: 12,
          miniCard: { cols: 6, rows: 1 },
          chart: { cols: 12, rows: 2 },
          table: { cols: 12, rows: 4 },
        };
      } else if (result.breakpoints['(max-width: 541px)']) {
        return {
          columns: 12,
          miniCard: { cols: 4, rows: 1 },
          chart: { cols: 12, rows: 2 },
          table: { cols: 12, rows: 4 },
        };
      } else if (result.breakpoints['(max-width: 821px)']) {
        return {
          columns: 12,
          miniCard: { cols: 4, rows: 1 },
          chart: { cols: 6, rows: 2 },
          table: { cols: 6, rows: 4 },
        };
      }  else if (result.breakpoints['(max-width: 1025px)']) {
        return {
          columns: 12,
          miniCard: { cols: 4, rows: 1 },
          chart: { cols: 6, rows: 2 },
          table: { cols: 8, rows: 4 },
        };
      } else if (result.breakpoints[Breakpoints.XLarge]) {
        return {
          columns: 12,
          miniCard: { cols: 4, rows: 1 },
          chart: { cols: 6, rows: 2 },
          table: { cols: 8, rows: 4 },
        };
      }
      return {
        columns: 12,
        miniCard: { cols: 2, rows: 1 },
        chart: { cols: 6, rows: 2 },
        table: { cols: 8, rows: 4 },
      };
    })
  );

  constructor(private clientDashboardService:ClientDashboardService){
    this.clientDashboardService.isUserOnClientDashboard = true;

  }
}
