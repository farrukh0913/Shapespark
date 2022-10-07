import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { NgModule } from '@angular/core';

export const customersRoutes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customer-detail', component: CustomerDetailComponent },
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})

export class CustomersRoutingModule { }