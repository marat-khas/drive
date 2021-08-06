import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Breadcrumbs } from '@components/breadcrumbs';
import { Confirm } from '@components/confirm';
import { Header } from '@components/header';
import { OrderSlider } from '@components/order-slider';
import { Spec } from '@components/spec';
import { ORDER_STATUS_ID } from '@constants/order-status-id';
import { ConfirmSendHideAction, OrderSendAction } from '@state/order/actions';
import { getConfirmSendStatus, getOrder } from '@state/selectors';

import './order.scss';

export const Order: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const order = useSelector(getOrder);
    const confirmSendStatus = useSelector(getConfirmSendStatus);
    const confirmSendSubmit = () => {
        dispatch(
            OrderSendAction(
                {
                    orderStatusId: {
                        id: ORDER_STATUS_ID.NEW,
                    },
                    cityId: order.point.value!.cityId,
                    pointId: order.point.value!,
                    carId: order.car.value!,
                    color: order.color.value!,
                    dateFrom: order.date.from!,
                    dateTo: order.date.to!,
                    rateId: order.rate.value!,
                    price: order.price.value!,
                    isFullTank: order.additionals[0].selected,
                    isNeedChildChair: order.additionals[1].selected,
                    isRightWheel: order.additionals[2].selected,
                },
                history
            )
        );
        dispatch(ConfirmSendHideAction());
    };
    const confirmSendCancel = () => {
        dispatch(ConfirmSendHideAction());
    };

    return (
        <div className='order'>
            <div className='order__head'>
                <div className='container'>
                    <Header />
                </div>
            </div>
            <div className='order__breadcrumbs'>
                <div className='container'>
                    <Breadcrumbs />
                </div>
            </div>
            <div className='order__body'>
                <div className='container'>
                    <div className='order__wrapper'>
                        <div className='order__steps'>
                            <div className='order__slider'>
                                <OrderSlider />
                            </div>
                        </div>
                        <div className='order__result'>
                            <Spec />
                        </div>
                    </div>
                </div>
                {confirmSendStatus ? (
                    <Confirm
                        title='Подтвердить заказ'
                        submitHandle={confirmSendSubmit}
                        cancelHandle={confirmSendCancel}
                    />
                ) : null}
            </div>
        </div>
    );
};
