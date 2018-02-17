import { Component, OnInit, Input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { Column } from '../types';

@Component({
  selector: 'data-column',
  template: ``
})
export class DataColumnComponent implements OnInit {
  @Input() field: string = "";
  @Input() header: string = "";
  @Input() sortable: boolean = false;
  @Input() searchable: boolean = false;
  @Input() colType: string = "Data";
  @Input() searchType: string = "Text";

  constructor(dataTableComponent: DataTableComponent) { 
    dataTableComponent.addDataColumn(this);
  }

  ngOnInit() {
  }

}
