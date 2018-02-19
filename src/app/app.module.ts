import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {Apollo, ApolloModule} from 'apollo-angular';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { DataColumnComponent } from './data-column/data-column.component';
import { FilterRecordsPipe } from './filter-records.pipe';

import {NgxPaginationModule} from 'ngx-pagination'; 

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent,
    DataColumnComponent,
    FilterRecordsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(apollo: Apollo, httpLink: HttpLink) { 
    apollo.create({
      link: httpLink.create({ uri: 'https://api.graph.cool/simple/v1/cjdrmmjke0o4z0192mn2xtzga' }),
      cache: new InMemoryCache()
    });
  }
 }
