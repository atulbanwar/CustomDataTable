import { Component, OnInit, Input } from '@angular/core';
import { DataTableComponent } from '../data-table/data-table.component';
import { Column } from '../types';

// DataColumnComponent are the child component of DataTableComponent.
// This component is used to fetch the column information.
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
    // Passing column information to DataTable component.
    dataTableComponent.addDataColumn(this);
  }

  ngOnInit() {
  }

}
