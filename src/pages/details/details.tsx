import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Header } from '@components/header';
import { Result } from '@components/result';
import { Spec } from '@components/spec';

export const Details: FC = () => {
    const { orderId } = useParams<{ orderId: string }>();

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
                                        Ваш заказ подтверждён
                                    </div>
                                    <Result />
                                </div>
                            </div>
                        </div>
                        <div className='order__result'>
                            <Spec />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
