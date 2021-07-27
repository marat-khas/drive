export interface Point {
    name: string;
    address: string;
    id: string;
    cityId: {
        id: string;
        name: string;
    };
    coords: {
        lat: number;
        lng: number;
    };
}

export interface PointsState {
    points: Point[] | null;
}

export enum PointsActionTypes {
    GET_POINTS_SUCCESS = 'GET_POINTS_SUCCESS',
}

export interface GetPoints {
    type: PointsActionTypes.GET_POINTS_SUCCESS;
    payload: Point[];
}

export type PointsAction = GetPoints;
