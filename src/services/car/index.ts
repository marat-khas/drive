import axios from 'axios';

import { CAR_URL } from '@constants/urls'
import { Car } from '@state/cars/types';

const CAR_LIMIT = 20;

export const getCar = (): Promise<Car[]> =>
  axios.get(CAR_URL, {
    headers: {
      'X-Api-Factory-Application-Id': process.env.APPLICATION_ID
    },
    params: {
      limit: CAR_LIMIT
    },
  })
  .then((response) => {
    console.log(response);
    return  response.data.data;
  });