import { CAR_URL } from '@constants/urls';
import { baseApi } from '@services/base';
import { Car } from '@state/cars/types';

import { GetCarsResponse } from './types';

const CAR_LIMIT = 20;

export const getCars = (): Promise<Car[]> =>
    baseApi
        .request({
            url: `${CAR_URL}/?limit=${CAR_LIMIT}`,
        })
        .then((response: GetCarsResponse) => response.data.data);
