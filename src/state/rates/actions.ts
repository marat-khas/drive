import { Dispatch } from 'redux';

import { getRates } from '@services/rate';
import {
    LoadingEndAction,
    LoadingStartAction,
    ModalShowAction,
} from '@state/global/actions';

import { GetRates, Rate, RatesActionTypes } from './types';

export const GetRatesSuccessAction = (rates: Rate[]): GetRates => ({
    type: RatesActionTypes.GET_RATES_SUCCESS,
    payload: rates,
});

export const GetRatesAction = () => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('Загрузка тарифов ...'));
    getRates()
        .then((data) => {
            dispatch(GetRatesSuccessAction(data));
        })
        .catch((error) => {
            dispatch(
                ModalShowAction({
                    head: 'Ошибка!',
                    body: error.response.data,
                })
            );
        })
        .finally(() => {
            dispatch(LoadingEndAction('Загрузка тарифов ...'));
        });
};
