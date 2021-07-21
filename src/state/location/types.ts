export interface Coord {
    lat: number;
    lng: number;
}

export interface Point {
    id: number;
    addr: string;
    coord: Coord;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
}

export interface LocationState {
    city: City | undefined;
    point: Point | undefined;
}

export enum LocationActionTypes {
    CHANGE_CITY = 'CHANGE_CITY',
    CHANGE_POINT = 'CHANGE_POINT',
}

export interface ChangeCity {
    type: LocationActionTypes.CHANGE_CITY;
    payload: City | undefined;
}

export interface ChangePoint {
    type: LocationActionTypes.CHANGE_POINT;
    payload: Point | undefined;
}

export type LocationAction = ChangeCity | ChangePoint;