import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { customersRoutes, CustomersRoutingModule } from './customers.routing';
import { RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { MaterialModule } from '../material-module';

@NgModule({
  declarations: [CustomersComponent, CustomerDetailComponent],
  imports: [
    CustomersRoutingModule,
    CommonModule,
    MaterialModule,
    RouterModule.forChild(customersRoutes)
   ]
})

export class CustomersModule { }
