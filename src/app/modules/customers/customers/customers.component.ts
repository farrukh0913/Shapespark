import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomersList, ITableColumns } from '../customers.model';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent {
  title = 'Shapespark';
  dataSource: any;
  displayedColumns: string[] = [];
  columnNames: ITableColumns[] = [];

  constructor(private readonly customersService: CustomersService, private readonly router: Router){ }

  ngOnInit() {
    this.columnNames = [
      { id: 'name', value: 'Name' },
      { id: 'color', value: 'Color' },
      { id: 'noOfGroups', value: 'No of Groups' },
      { id: 'logo', value: 'Logo' },
  ];

  this.displayedColumns = this.columnNames.map(column => column.id);


    this.customersService.getCustomers().pipe(take(1)).subscribe((customersData: any) =>{
      console.log('customersData:123 ', customersData);
      const customersList: ICustomersList[] = customersData;
      this.dataSource = new MatTableDataSource(customersList);
    });
  }

  onRowClick(row: ICustomersList){
    this.router.navigate(["/customers/customer-detail"], {queryParams: { id: row.id }});
  }

}



