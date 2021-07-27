export interface Coords {
    lat: number;
    lng: number;
}

export interface GetCoordsResponse {
    results: {
        geometry: {
            location: Coords;
        };
    }[];
}
