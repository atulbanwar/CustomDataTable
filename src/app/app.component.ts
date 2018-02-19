import { Component } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle, Query } from './types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loading: boolean;
  vehicles: Vehicle[];

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo.watchQuery<Query>({
      query: gql`
      query allVehicles  {
        allVehicles {
          id
          make
          model
          year
          package
          fuelType
          transmission
          favorite
        }
      }
    `})
    .valueChanges
    .subscribe(({ data, loading }) => {
      this.loading = loading;
      // Creating deep copy of array to remove readonly property
      this.vehicles = JSON.parse(JSON.stringify(data.allVehicles))
    });
  }
}
