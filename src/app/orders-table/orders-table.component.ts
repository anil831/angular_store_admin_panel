import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { OrdersTableDataSource, OrdersTableItem } from './orders-table-datasource';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements AfterViewInit {
  //accessing the component instance
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  //accessing the component instance
  @ViewChild(MatSort) sort!: MatSort;
  
 //accessing the component instance
  @ViewChild(MatTable) table!: MatTable<OrdersTableItem>;
  dataSource = new OrdersTableDataSource();

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name', 'weight', 'symbol'];

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
