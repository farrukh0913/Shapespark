import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { EditCustomerDetailComponent } from '../edit-customer-detail/edit-customer-detail.component';
import { CustomersService } from '../customers.service';
import { ICustomerDetail, ICustomersList, ITableColumns } from '../customers.model';

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})

export class CustomerDetailComponent {
  dataSource: any;
  name: string = '';
  description: string = '';
  image: string = '';
  displayedColumns: string[] = [];
  columnNames: ITableColumns[] = [];

  constructor(
    private readonly customersService: CustomersService,
    private readonly dialog: MatDialog,
    private readonly router: Router) { }

  ngOnInit() {
    this.name = 'Farrukh Shahzad';
    this.description = 'Software Engineer';
    this.image = './assets/images/logo1.png';

    this.columnNames = [
      { id: 'name', value: 'Name' },
      { id: 'noOfVms', value: 'No of VMs' },
    ];

    this.displayedColumns = this.columnNames.map(column => column.id);
    this.customersService.getGroups().pipe(take(1)).subscribe((detail: any) => {
      const customerDetail: ICustomerDetail[] = detail;
      this.dataSource = new MatTableDataSource(customerDetail);
    });

  }

  onRowClick(row: ICustomersList) {
    this.router.navigate(["/customers/customer-detail"], { queryParams: { id: row.id } });
  }

  editCustomer() {
    const dialogRef = this.dialog.open(EditCustomerDetailComponent, {
      height: '80%',
      width: '60%',
      data: { name: this.name, description: this.description, image: this.image }
    });

    dialogRef.afterClosed().pipe(take(1)).subscribe(result => {
      console.log(`Dialog result: ${result}`); // Pizza!
    });
  }

}
