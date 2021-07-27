import { POINT_URL } from '@constants/urls';
import { baseApi } from '@services/base';
import { Point } from '@state/points/types';

import { GetPointsResponse } from './types';

export const getPoints = (): Promise<Omit<Point, 'coords'>[]> =>
    baseApi
        .request({
            url: POINT_URL,
        })
        .then((response: GetPointsResponse) => response.data.data);
