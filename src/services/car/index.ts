import axios from 'axios';

import { CAR_URL } from '@constants/urls'

export interface CarResponse {
  priceMax: number;
  priceMin: number;
  name: string;
  thumbnail: {
    path: string;
  };
  categoryId: {
    name: string;
    description: string;
    id: string;
  };
  colors: string[]
}

const CAR_LIMIT = 20;

export const getCar = (): Promise<CarResponse> =>
  axios.get(CAR_URL, {
    headers: {
      'X-Api-Factory-Application-Id': process.env.APPLICATION_ID
    },
    params: {
      limit: CAR_LIMIT
    },
  });