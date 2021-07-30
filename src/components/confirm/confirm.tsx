import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@components/common/button';
import { ROUTES } from '@constants/routes';
import { orderSend } from '@services/order';
import {
    LoadingEndAction,
    LoadingStartAction,
    ModalShowAction,
} from '@state/global/actions';
import { ConfirmHideAction } from '@state/order/actions';
import { getOrder } from '@state/selectors';

import './confirm.scss';

export const Confirm: FC = () => {
    const dispatch = useDispatch();

    const history = useHistory();

    const order = useSelector(getOrder);

    const submitHandle = () => {
        dispatch(ConfirmHideAction());
        dispatch(LoadingStartAction('Отправка заказа ...'));
        orderSend({
            orderStatusId: {
                name: 'new!.',
                id: '5e26a191099b810b946c5d89',
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
        })
            .then((data) => {
                history.push(`${ROUTES.DETAILS}/${data.id}`);
            })
            .catch((error) => {
                dispatch(
                    ModalShowAction({
                        head: 'Ошибка!',
                        body: error,
                    })
                );
            })
            .finally(() => {
                dispatch(LoadingEndAction('Отправка заказа ...'));
            });
    };
    const cancelHandle = () => {
        dispatch(ConfirmHideAction());
    };
    return (
        <div className='confirm'>
            <div className='confirm__wrapper'>
                <div className='confirm__head'>Подтвердить заказ</div>
                <div className='confirm__foot'>
                    <div className='confirm__btn'>
                        <Button onClick={submitHandle}>Подтвердить</Button>
                    </div>
                    <div className='confirm__btn'>
                        <Button onClick={cancelHandle} bg={3}>
                            Вернуться
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
