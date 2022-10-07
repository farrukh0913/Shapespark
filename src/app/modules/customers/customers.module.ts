import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customersRoutes, CustomersRoutingModule } from './customers.routing';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  declarations: [CustomersComponent, CustomerDetailComponent],
  imports: [
    CustomersRoutingModule,
    CommonModule,
    MatTableModule,
    RouterModule.forChild(customersRoutes)
   ]
})

export class CustomersModule { }
