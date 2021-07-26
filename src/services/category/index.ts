import axios from 'axios';

import { CATEGORY_URL } from '@constants/urls';
import { Category } from '@state/categories/types';

import { GetCategoriesResponse } from './types';

export const getCategories = (): Promise<Category[]> =>
    axios
        .get(CATEGORY_URL, {
            headers: {
                'X-Api-Factory-Application-Id': process.env.APPLICATION_ID,
            },
        })
        .then((response: GetCategoriesResponse) => response.data.data);
