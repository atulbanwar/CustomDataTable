import { Component, OnInit, Input } from '@angular/core';
import { Column, SortColumn } from '../types';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() data: any[];
  columns: Array<Column>;
  sortCol: SortColumn;

  constructor() { 
    this.columns = new Array<Column>();
    this.sortCol = {
      field: "",
      order: ""
    };
  }

  ngOnInit() {
  }

  addDataColumn(column: Column) {
    this.columns.push(column);
  }

}
