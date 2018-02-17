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