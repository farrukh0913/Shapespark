import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomerDetail, ICustomersList, ITableColumns } from '../customers.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})

export class CustomerDetailComponent {
  dataSource: any;
  displayedColumns: string[] = [];
  columnNames: ITableColumns[] = [];

  constructor(private readonly customersService: CustomersService, private readonly router: Router){ }

  ngOnInit() {
    this.columnNames = [
      { id: 'name', value: 'Name' },
      { id: 'noOfVms', value: 'No of VMs' },
  ];

  this.displayedColumns = this.columnNames.map(column => column.id);
    this.customersService.getGroups().pipe(take(1)).subscribe((detail: any) =>{
      const customerDetail: ICustomerDetail[] = detail;
      this.dataSource = new MatTableDataSource(customerDetail);
    });

  }

  onRowClick(row: ICustomersList){
    this.router.navigate(["/customers/customer-detail"], {queryParams: { id: row.id }});
  }
}
