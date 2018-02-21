# Custom Data Table

__Duration__: Feb 2018

__Description__: Custom Data Table is an HTML Table Control which is used to display records fetched from a database table. The control supports searching, sorting and pagination of records. All these options can be customized as per the user's needs.

__Live Demo__: https://atulbanwar.github.io/CustomDataTable/

__Technologies__: Angular 5, TypeScript, Bootstrap 4, Graphql, Apollo, HTML, CSS

__Role__: Software Developer

__Responsibilities__:

 - Design and implement a DataTable control which is:
	 - reusable
	 - allows reordering of column
	 - allows adding/removing of columns
	 - support different column types e.g. text, favorite
	 - allows user to specify custom header
	 - responsive
- Design and implement sorting logic on columns. Allow the user to add/remove sorting feature from specific columns.
- Design and implement searching logic on columns.  Allow the user to add/remove searching feature from specific columns.
- Design and implement favorite column type.
- Create a web application using Angular to display a live demo of datatable. The application will fetch data from Graphql API using Appolo.

__Usage__:

Specify custom data table using following syntax:

	 ```<data-table [data]=dataSourceArray [isLoading]=loadingBooleanVar>
		 <data-column [field]="'column_name_in_datasource'" 
		 [header]="'column_header'" 
		 [sortable]=true/false [searchable]=true/false 
		 [colType]="'data/favorite'" [searchType]="'Text'>
		 </data-column>
		 ...
	</data-table>```

- `<data-table>` tag is used to specify a table control.
  - `[data]` attribute is used to specify a datasource array of JSON objects.
  - `[isLoading]` attribute is used to pass a boolean variable to show/hide loader icon.

- `<data-column>` tag is used to specify a column in a table. Use multiple `<data-column>` tags to specify multiple columns.
  - `[field]` attribute is used to specify column name field (as present in JSON object of records).
  - `[header]` attribute is used to specify column header name.
  - `[sortable]` attribute is used to specify whether a column is sortable or not. Accepts true/false value.
  - `[searchable]` attribute is used to specify whether a column is searchable or not. Accepts true/false value.
  - `[colType]` attribute is used to specify the type of column. The control supports two column type at this moment which is text and favorite. The text column-type will display data as it is, and favorite column-type accepts boolean data and shows heart icon in the table. This attribute could be used to create new columns type in future for e.g. a checkbox column to select a record.
  - `[searchType]` Attribute is used to specify the type of search which can be performed on the data of a column. Currently, it supports only text search. In future support for other types of search like a drop-down could be added.

__Possible future updates__:
- Support for more `[colTypes]` e.g. a checkbox column to select records.
- Support for more `[searchType]` e.g. a simple/multi-select drop-down to filter records. Another example could be a support for an auto-search textbox.
- Support for live CRUD operations.
- Ability to gracefully handle any number of records e.g. a million records.

__Contributors__: Atul Banwar
