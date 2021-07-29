export interface Rate {
    price: number;
    rateTypeId: {
        unit: string;
        name: string;
        id: string;
    };
    id: string;
}

export interface RatesState {
    rates: Rate[] | null;
}

export enum RatesActionTypes {
    GET_RATES_SUCCESS = 'GET_RATES_SUCCESS',
}

export interface GetRates {
    type: RatesActionTypes.GET_RATES_SUCCESS;
    payload: Rate[];
}

export type RatesAction = GetRates;
