import { Car } from '@state/cars/types';
import { Category } from '@state/categories/types';
import { City } from '@state/cities/types';
import { Point } from '@state/points/types';
import { Rate } from '@state/rates/types';

import {
    AdditionalChange,
    CarSelect,
    CategorySelect,
    CitySelect,
    ColorSelect,
    ConfirmHide,
    ConfirmShow,
    DateFromSelect,
    DateToSelect,
    OrderActionTypes,
    PointSelect,
    RateSelect,
} from './types';

export const CitySelectAction = (city: City | null): CitySelect => ({
    type: OrderActionTypes.CITY_SELECT,
    payload: city,
});

export const PointSelectAction = (point: Point | null): PointSelect => ({
    type: OrderActionTypes.POINT_SELECT,
    payload: point,
});

export const CategorySelectAction = (
    category: Category | null
): CategorySelect => ({
    type: OrderActionTypes.CATEGORY_SELECT,
    payload: category,
});

export const CarSelectAction = (car: Car | null): CarSelect => ({
    type: OrderActionTypes.CAR_SELECT,
    payload: car,
});

export const ColorSelectAction = (color: string | null): ColorSelect => ({
    type: OrderActionTypes.COLOR_SELECT,
    payload: color,
});

export const DateFromSelectAction = (from: Date | null): DateFromSelect => ({
    type: OrderActionTypes.DATE_FROM_SELECT,
    payload: from,
});

export const DateToSelectAction = (to: Date | null): DateToSelect => ({
    type: OrderActionTypes.DATE_TO_SELECT,
    payload: to,
});

export const RateSelectAction = (rate: Rate | null): RateSelect => ({
    type: OrderActionTypes.RATE_SELECT,
    payload: rate,
});

export interface AdditionLChangePtops {
    id: string;
    status: boolean;
}

export const AdditionalChangeAction = (
    additional: AdditionLChangePtops
): AdditionalChange => ({
    type: OrderActionTypes.ADDITIONAL_CHANGE,
    payload: additional,
});

export const ConfirmShowAction = (): ConfirmShow => ({
    type: OrderActionTypes.CONFIRM_SHOW,
});

export const ConfirmHideAction = (): ConfirmHide => ({
    type: OrderActionTypes.CONFIRM_HIDE,
});
