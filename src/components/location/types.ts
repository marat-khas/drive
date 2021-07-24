export interface Coord {
    lat: number;
    lng: number;
}

export interface Point {
    addr: string;
    coord: Coord;
}

export interface Place {
    city: string;
    coord: Coord;
    points: Point[];
}
