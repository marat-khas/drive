import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';

import { Confirm } from '@components/confirm';
import { Header } from '@components/header';
import { Result } from '@components/result';
import { Spec } from '@components/spec';
import { ORDER_STATUS_ID } from '@constants/order-status-id';
import {
    ConfirmCancelHideAction,
    OrderCancelAction,
    OrderGetAction,
} from '@state/order/actions';
import { getConfirmCancelStatus, getOrderStatusId } from '@state/selectors';

export const Details: FC = () => {
    const dispatch = useDispatch();
    const { orderId } = useParams<{ orderId: string }>();
    const orderStatusId = useSelector(getOrderStatusId);
    const confirmCancelStatus = useSelector(getConfirmCancelStatus);
    const confirmCancelSubmit = () => {
        dispatch(OrderCancelAction(orderId));
        dispatch(ConfirmCancelHideAction());
    };
    const confirmCancelCancel = () => {
        dispatch(ConfirmCancelHideAction());
    };

    let statusText = '';
    switch (orderStatusId) {
        case ORDER_STATUS_ID.NEW:
            statusText = 'создан';
            break;
        case ORDER_STATUS_ID.CONFIRM:
            statusText = 'подтвержден';
            break;
        case ORDER_STATUS_ID.CANCEL:
            statusText = 'отменен';
            break;
        default:
            statusText = 'не найден';
            break;
    }

    const statusClasses = classNames('order__status', {
        'order__status--new': orderStatusId === ORDER_STATUS_ID.NEW,
        'order__status--confirm': orderStatusId === ORDER_STATUS_ID.CONFIRM,
        'order__status--cancel': orderStatusId === ORDER_STATUS_ID.CANCEL,
    });

    useEffect(() => {
        if (!orderStatusId) {
            dispatch(OrderGetAction(orderId));
        }
    });

    return (
        <div className='order'>
            <div className='order__head'>
                <div className='container'>
                    <Header />
                </div>
            </div>
            <div className='order__breadcrumbs'>
                <div className='container'>
                    <div className='breadcrumbs'>
                        <div className='breadcrumbs-item'>
                            <div>Заказ номер {orderId}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='order__body'>
                <div className='container'>
                    <div className='order__wrapper'>
                        <div className='order__steps'>
                            <div className='order__slider'>
                                <div className='order__slide'>
                                    <div className={statusClasses}>
                                        {orderStatusId ? (
                                            <>
                                                Ваш заказ{' '}
                                                <span>{statusText}</span>
                                            </>
                                        ) : (
                                            <>Загрузка данных ...</>
                                        )}
                                    </div>
                                    <Result />
                                </div>
                            </div>
                        </div>
                        <div className='order__result'>
                            <Spec details />
                        </div>
                    </div>
                </div>
                {confirmCancelStatus ? (
                    <Confirm
                        title='Отменить заказ'
                        submitHandle={confirmCancelSubmit}
                        cancelHandle={confirmCancelCancel}
                    />
                ) : null}
            </div>
        </div>
    );
};
