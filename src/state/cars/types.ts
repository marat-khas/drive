export interface Car {
    priceMax: number;
    priceMin: number;
    name: string;
    thumbnail: {
        path: string;
    };
    categoryId: {
        name: string;
        description: string;
        id: string;
    };
    colors: string[];
}

export interface CarsState {
    cars: Car[] | null;
}

export enum CarsActionTypes {
    GET_CARS_SUCCESS = 'GET_CARS_SUCCESS',
}

export interface GetCars {
    type: CarsActionTypes.GET_CARS_SUCCESS;
    payload: Car[];
}

export type CarsAction = GetCars;
