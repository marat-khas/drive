export interface OrderSendRequest {
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
}

export interface OrderSendResponse {
    data: {
        data: string;
    };
}
