import { Car } from '@state/cars/types';
import { City } from '@state/cities/types';
import { Point } from '@state/points/types';
import { Rate } from '@state/rates/types';

export interface OrderData {
    orderStatusId: {
        name: string;
        id: string;
    };
    cityId: Omit<City, 'coords'>;
    pointId: Omit<Point, 'coords'>;
    carId: Car;
    color: string;
    dateFrom: number;
    dateTo: number;
    rateId: Rate;
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
