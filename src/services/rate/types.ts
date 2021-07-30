import { Rate } from '@state/rates/types';

export interface GetRatesResponse {
    data: {
        data: Rate[];
    };
}
