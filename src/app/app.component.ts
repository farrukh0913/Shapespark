import { Component, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface Element {
  position: number,
  name: string,
  weight: number,
  symbol: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Shapespark';
  dataSource: any;
  displayedColumns: any[] = [];

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
  }

  createTable() {
    let tableArr: Element[] = [{ position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
      { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
      { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
      { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
      { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
      { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    ];

    this.dataSource = new MatTableDataSource(tableArr);
  }
}
