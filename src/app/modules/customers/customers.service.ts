import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

  export class CustomersService {

    constructor(private readonly http: HttpClient) { }
    getCustomers() {
      return this.http.get('../assets/customers.json');
    }

    getGroups() {
      return this.http.get('../assets/customer-detail.json');
    }

  }