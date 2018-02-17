export type Vehicle = {
    id: string;
    make: string;
    model: string;
    year: number;
    package: string;
    fuelType: string;
    transmission: string;
    favorite: string;
}

export type Query = {
    allVehicles: Vehicle[];
}

 export type Column = {
     field: string;
     header: string;
     sortable: boolean;
     searchable: boolean;
     colType: string;
     searchType: string;
 }