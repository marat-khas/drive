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
    points: Point[];
}

export interface LocationState {
    city: City | null;
    point: Point | null;
}

export enum LocationActionTypes {
    CHANGE_CITY = 'CHANGE_CITY',
    CHANGE_POINT = 'CHANGE_POINT',
}

export interface ChangeCity {
    type: LocationActionTypes.CHANGE_CITY;
    payload: City | null;
}

export interface ChangePoint {
    type: LocationActionTypes.CHANGE_POINT;
    payload: Point | null;
}

export type LocationAction = ChangeCity | ChangePoint;
