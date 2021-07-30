export interface OrderData {
    orderStatusId: {};
    cityId: {};
    pointId: {};
    carId: {};
    color: string;
    dateFrom: Date;
    dateTo: Date;
    rateId: {};
    price: number;
    isFullTank: boolean;
    isNeedChildChair: boolean;
    isRightWheel: boolean;
    id: string;
}

export type OrderSendRequest = Omit<OrderData, 'id'>;

export type OrderSendResponse = {
    data: {
        data: OrderData;
    };
};
