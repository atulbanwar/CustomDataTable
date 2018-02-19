import { Component, OnInit, Input } from '@angular/core';
import { Column, SortColumn, SearchParameter } from '../types';

@Component({
  selector: 'data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  @Input() data: any[] = [];
  columns: Array<Column>;
  sortCol: SortColumn;
  searchParams: SearchParameter[] = [];
  currentPage: number = 1;

  constructor() { 
    this.columns = new Array<Column>();
    this.sortCol = {
      field: "",
      order: ""
    };
  }

  ngOnInit() {
  }

  // This method will be called from DataColumnComponent with Column info
  addDataColumn(column: Column) {
    this.columns.push(column);
  }

  sort(field: string) {
    // Updating sortCol variable which maintains current sort field and order    
    if (this.sortCol.field == field) {
      if (this.sortCol.order == "asc") {
        this.sortCol.order = "des";
      } else {
        this.sortCol.order = "asc";
      }
    } else {
      this.sortCol.field = field;
      this.sortCol.order = "asc";
    }

    this.data.sort(this.sortData(this.sortCol));
  }

  // Sorting logic for array of vehicles
  sortData(sortCol) {
    return function(a, b) {
      if (typeof a[sortCol.field] == "number" && typeof b[sortCol.field] == "number") {
        if (sortCol.order == "asc") {
          return a[sortCol.field] - b[sortCol.field];
        } else {
          return b[sortCol.field] - a[sortCol.field];
        }
      } else if (typeof a[sortCol.field] == "string" && typeof b[sortCol.field] == "string") {
        var x = a[sortCol.field].toLowerCase();
        var y = b[sortCol.field].toLowerCase();
        if (sortCol.order == "asc") {
          if (x < y) {return -1;}
          if (x > y) {return 1;}
        } else {
          if (x < y) {return 1;}
          if (x > y) {return -1;}
        }
        return 0;
      } else if (typeof a[sortCol.field] == "boolean" && typeof b[sortCol.field] == "boolean") {
        var x = a[sortCol.field].toString().toLowerCase();
        var y = b[sortCol.field].toString().toLowerCase();
        if (sortCol.order == "des") {
          if (x < y) {return -1;}
          if (x > y) {return 1;}
        } else {
          if (x < y) {return 1;}
          if (x > y) {return -1;}
        }
        return 0;
      } else {
        // Default case
        if (sortCol.order == "asc") {
          return a[sortCol.field] - b[sortCol.field];
        } else {
          return b[sortCol.field] - a[sortCol.field];
        }
      }
      // Add condition for date if required.
    };
  }

  // Updating the list of search paramenters to filter rows
  updateSearchParams(field: string, searchStr: string) {
    // Prepare list of searchParams if empty
    if (this.searchParams.length == 0) {
      var column: any;
      for (column of this.columns) {
        if (column.searchable) {
          this.searchParams.push({
            field: column.field,
            searchStr: ""
          });
        }
      }
    }

    var para: any;
    for (para of this.searchParams) {
      if (para.field == field) {
        para.searchStr = searchStr.trim().length != 0 ? searchStr.trim().toLowerCase() : "";
        break;
      }
    }
  }

  // To toggle favorite column value
  toggleFavorite(row: any, field: string) {
    row[field] = !row[field];
  }
}
