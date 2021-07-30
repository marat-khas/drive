import { ORDER_URL } from '@constants/urls';
import { baseApi } from '@services/base';

import { OrderSendRequest, OrderSendResponse } from './types';

export const orderSend = (data: OrderSendRequest): Promise<string> =>
    baseApi
        .post(ORDER_URL, data)
        .then((response: OrderSendResponse) => response.data.data);
