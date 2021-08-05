import { ORDER_STATUS_ID } from '@constants/order-status-id';
import { ORDER_URL } from '@constants/urls';
import { baseApi } from '@services/base';

import { OrderData, OrderSendRequest, OrderSendResponse } from './types';

export const orderSend = (data: OrderSendRequest): Promise<OrderData> =>
    baseApi
        .post(ORDER_URL, data)
        .then((response: OrderSendResponse) => response.data.data);

export const orderGet = (id: string): Promise<OrderData> =>
    baseApi
        .request({
            url: `${ORDER_URL}/${id}`,
        })
        .then((response: OrderSendResponse) => response.data.data);

export const orderCancel = (id: string): Promise<string> =>
    baseApi.put(`${ORDER_URL}/${id}`, {
        orderStatusId: {
            id: ORDER_STATUS_ID.CANCEL,
        },
    });
