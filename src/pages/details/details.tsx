import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Header } from '@components/header';
import { Result } from '@components/result';
import { Spec } from '@components/spec';
import { OrderGetAction } from '@state/order/actions';
import { getOrderStatus } from '@state/selectors';

export const Details: FC = () => {
    const dispatch = useDispatch();
    const { orderId } = useParams<{ orderId: string }>();
    const orderStatus = useSelector(getOrderStatus);

    let statusText = '';
    switch (orderStatus) {
        case 'new!.':
            statusText = 'создан';
            break;
        case 'confirmed':
            statusText = 'подтвержден';
            break;
        case 'cancelled':
            statusText = 'отменен';
            break;
        default:
            statusText = 'не найден';
            break;
    }

    useEffect(() => {
        if (!orderStatus) {
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
                                    <div className='order__status'>
                                        {orderStatus ? (
                                            <>Ваш заказ {statusText}</>
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
            </div>
        </div>
    );
};
