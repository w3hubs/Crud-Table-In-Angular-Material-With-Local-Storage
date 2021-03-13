import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol','button'];
  title = 'new';
  dataSource = new MatTableDataSource([]);
  saveBtn = true;

  constructor() {
    var data = localStorage.getItem("data");
    if (data) {
      var parsedData = JSON.parse(localStorage.getItem("data"));
      this.dataSource = new MatTableDataSource(parsedData);
    } else {
      localStorage.setItem("data", JSON.stringify(ELEMENT_DATA));
      var parsedData = JSON.parse(localStorage.getItem("data"));
      this.dataSource = new MatTableDataSource(parsedData);
    }
  }
  type(ele: any, value: any, val: any) {
    console.log(value);
    console.log(ele["val"]);
    ele[val] = value;
    console.log(this.dataSource);
  }
  save() {
    this.saveBtn = true;
    localStorage.setItem("data", JSON.stringify(this.dataSource.data));
    console.log(this.dataSource);
  }
  edit() {
    this.saveBtn = false;
  }
  delete(element: number) {
    const data = this.dataSource.data;
    data.splice(element, 1);
    this.dataSource.data = data;
    console.log(this.dataSource);
    localStorage.setItem("data", JSON.stringify(this.dataSource.data));
  }
}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];