import Geocode from 'react-geocode';

import { Coords, GetCoordsResponse } from './types';

Geocode.setApiKey(process.env.GOOGLE_MAPS_API_KEY as string);
Geocode.setLanguage('ru');
Geocode.setRegion('ru');

export const getCoords = (address: string): Promise<Coords> =>
    Geocode.fromAddress(address).then(
        (data: GetCoordsResponse) => data.results[0].geometry.location
    );
