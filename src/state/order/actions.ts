import { History } from 'history';
import { Dispatch } from 'redux';

import { ORDER_STATUS_ID } from '@constants/order-status-id';
import { ROUTES } from '@constants/routes';
import { orderCancel, orderGet, orderSend } from '@services/order';
import { OrderData, OrderSendRequest } from '@services/order/types';
import { Car } from '@state/cars/types';
import { Category } from '@state/categories/types';
import { City } from '@state/cities/types';
import {
    LoadingEndAction,
    LoadingStartAction,
    ModalShowAction,
} from '@state/global/actions';
import { Point } from '@state/points/types';
import { Rate } from '@state/rates/types';

import {
    AdditionalChange,
    CarSelect,
    CategorySelect,
    CitySelect,
    ColorSelect,
    ConfirmCancelHide,
    ConfirmCancelShow,
    ConfirmSendHide,
    ConfirmSendShow,
    DateFromSelect,
    DateToSelect,
    OrderActionTypes,
    OrderGet,
    OrderStatusChange,
    PointSelect,
    PriceChange,
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

export const DateFromSelectAction = (from: number | null): DateFromSelect => ({
    type: OrderActionTypes.DATE_FROM_SELECT,
    payload: from,
});

export const DateToSelectAction = (to: number | null): DateToSelect => ({
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

export const PriceChangeAction = (price: number | null): PriceChange => ({
    type: OrderActionTypes.PRICE_CHANGE,
    payload: price,
});

export const ConfirmSendShowAction = (): ConfirmSendShow => ({
    type: OrderActionTypes.CONFIRM_SEND_SHOW,
});

export const ConfirmSendHideAction = (): ConfirmSendHide => ({
    type: OrderActionTypes.CONFIRM_SEND_HIDE,
});

export const ConfirmCancelShowAction = (): ConfirmCancelShow => ({
    type: OrderActionTypes.CONFIRM_CANCEL_SHOW,
});

export const ConfirmCancelHideAction = (): ConfirmCancelHide => ({
    type: OrderActionTypes.CONFIRM_CANCEL_HIDE,
});

export const OrderStatusChangeAction = (
    status: string | null
): OrderStatusChange => ({
    type: OrderActionTypes.ORDER_STATUS_CHANGE,
    payload: status,
});

export const OrderGetSuccessAction = (order: OrderData): OrderGet => ({
    type: OrderActionTypes.ORDER_GET,
    payload: order,
});

export const OrderGetAction = (id: string) => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('Получение деталей заказа ...'));
    orderGet(id)
        .then((data) => {
            dispatch(OrderGetSuccessAction(data));
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
            dispatch(LoadingEndAction('Получение деталей заказа ...'));
        });
};

export const OrderSendAction =
    (data: OrderSendRequest, history: History<unknown>) =>
    (dispatch: Dispatch<any>) => {
        dispatch(LoadingStartAction('Отправка заказа ...'));
        orderSend(data)
            .then((response) => {
                dispatch(OrderStatusChangeAction(ORDER_STATUS_ID.NEW));
                history.push(`${ROUTES.DETAILS}/${response.id}`);
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
                dispatch(LoadingEndAction('Отправка заказа ...'));
            });
    };

export const OrderCancelAction = (id: string) => (dispatch: Dispatch<any>) => {
    dispatch(LoadingStartAction('Отмена заказа ...'));
    orderCancel(id)
        .then(() => {
            dispatch(OrderStatusChangeAction(ORDER_STATUS_ID.CANCEL));
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
            dispatch(LoadingEndAction('Отмена заказа ...'));
        });
};
