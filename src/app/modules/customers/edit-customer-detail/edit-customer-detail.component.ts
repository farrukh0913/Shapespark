import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { CustomersService } from '../customers.service';
import { MatTableDataSource } from '@angular/material/table';
import { ICustomerDetail, ICustomersList, ITableColumns } from '../customers.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-customer-detail',
  templateUrl: './edit-customer-detail.component.html',
  styleUrls: ['./edit-customer-detail.component.scss']
})

export class EditCustomerDetailComponent {
  public customerForm: FormGroup;

  constructor(private readonly fb: FormBuilder){
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    })
  }

  ngOnInit() {}

}
