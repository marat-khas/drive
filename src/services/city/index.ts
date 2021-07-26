import axios from 'axios';

import { CITY_URL } from '@constants/urls';
import { City } from '@state/cities/types';

import { GetCitiesResponse } from './types';

export const getCities = (): Promise<Omit<City, 'coords'>[]> =>
    axios
        .get(CITY_URL, {
            headers: {
                'X-Api-Factory-Application-Id': process.env.APPLICATION_ID,
            },
        })
        .then((response: GetCitiesResponse) => response.data.data);
