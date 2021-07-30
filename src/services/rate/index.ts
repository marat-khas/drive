import { RATE_URL } from '@constants/urls';
import { baseApi } from '@services/base';
import { Rate } from '@state/rates/types';

import { GetRatesResponse } from './types';

const RATE_LIMIT = 20;

export const getRates = (): Promise<Rate[]> =>
    baseApi
        .request({
            url: `${RATE_URL}/?limit=${RATE_LIMIT}`,
        })
        .then((response: GetRatesResponse) => response.data.data);
