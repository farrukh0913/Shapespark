import { Component, ViewChild } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})

export class CustomersComponent {
  title = 'Shapespark';
  dataSource: any;
  displayedColumns: any[] = [];
  constructor(private readonly customersService: CustomersService){ }

  /**
   * Pre-defined columns list for user table
   */
  columnNames = [{
    id: 'position',
    value: 'No.',

  }, {
    id: 'name',
    value: 'Name',
  },
    {
      id: 'weight',
      value: 'Weight',
    },
    {
      id: 'symbol',
      value: 'Symbol',
    }];

  ngOnInit() {
    this.displayedColumns = this.columnNames.map(x => x.id);
    this.createTable();
    this.customersService.getCustomers().subscribe(data =>{
      console.log('data:123 ', data);
    });
  }

  createTable() {
    let tableArr: any[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ];

    this.dataSource = new MatTableDataSource(tableArr);
  }
}



