import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersRoutes, CustomersRoutingModule } from './customers.routing';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from "@angular/common/http";
import { MatSortModule } from '@angular/material/sort';
import { MaterialModule } from '../material-module';
import { RouterModule } from '@angular/router';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';


@NgModule({
  declarations: [CustomersComponent, CustomerDetailComponent],
  imports: [
    CustomersRoutingModule,
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatTableModule,
    MaterialModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    MatSortModule,
    RouterModule.forChild(CustomersRoutes)
   ]
})

export class CustomersModule { }
