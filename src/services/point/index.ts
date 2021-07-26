import axios from 'axios';

import { POINT_URL } from '@constants/urls';
import { Point } from '@state/points/types';

import { GetPointsResponse } from './types';

export const getPoints = (): Promise<Omit<Point, 'coords'>[]> =>
    axios
        .get(POINT_URL, {
            headers: {
                'X-Api-Factory-Application-Id': process.env.APPLICATION_ID,
            },
        })
        .then((response: GetPointsResponse) => response.data.data);
