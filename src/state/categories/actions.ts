import { Dispatch } from 'redux';

import { getCategories } from '@services/category';
import { LoadingEndAction, LoadingStartAction } from '@state/global/actions';

import { CategoriesActionTypes, Category, GetCategories } from './types';

export const GetCategoriesSuccessAction = (
    categories: Category[]
): GetCategories => ({
    type: CategoriesActionTypes.GET_CATEGORIES_SUCCESS,
    payload: categories,
});

export const GetCategoriesAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('getCategories'));
    getCategories()
        .then((categories) => {
            dispatch(GetCategoriesSuccessAction(categories));
            dispatch(LoadingEndAction('getCategories'));
        })
        .catch((error) => {
            dispatch(LoadingEndAction('getCategories'));
            console.log(error);
        });
};
