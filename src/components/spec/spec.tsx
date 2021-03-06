import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/common/button';
import { SpecItem } from '@components/spec/spec-item';
import { ORDER_STATUS_ID } from '@constants/order-status-id';
import {
    ConfirmCancelShowAction,
    ConfirmSendShowAction,
    PriceChangeAction,
} from '@state/order/actions';
import { Cart } from '@state/order/types';
import {
    getActiveTabIndex,
    getAdditionals,
    getCar,
    getDate,
    getOrder,
    getOrderStatusId,
    getPrice,
    getRate,
    getTabs,
} from '@state/selectors';
import { TabActiveAction } from '@state/tabs/actions';
import { numSpace } from '@utils/num-space';

import './spec.scss';

import { SpecProps } from './types';

export const Spec: FC<SpecProps> = ({ details }) => {
    const dispatch = useDispatch();
    const car = useSelector(getCar);
    const tabs = useSelector(getTabs);
    const order = useSelector(getOrder);
    const activeTabIndex = useSelector(getActiveTabIndex);
    const orderStatusId = useSelector(getOrderStatusId);

    const handleNext = () => {
        if (details) {
            dispatch(ConfirmCancelShowAction());
        } else if (activeTabIndex === 3) {
            dispatch(ConfirmSendShowAction());
        } else {
            dispatch(TabActiveAction(activeTabIndex + 1));
        }
    };

    const selectedDates = useSelector(getDate);
    const selectedRate = useSelector(getRate);
    const additionals = useSelector(getAdditionals);

    const price = useSelector(getPrice);
    let cost = null;
    if (price) {
        cost = `${numSpace(price)} ₽`;
    } else if (car.value && activeTabIndex < 2) {
        cost = ` от ${numSpace(car.value.priceMin)} до ${numSpace(
            car.value.priceMax
        )} ₽`;
    }

    useEffect(() => {
        const additionCost = additionals.reduce(
            (acc, cur) => (cur.selected ? acc + cur.cost : acc),
            0
        );

        if (selectedDates.from && selectedDates.to && selectedRate.value) {
            const time = Math.floor(
                (selectedDates.to - selectedDates.from) / (1000 * 60)
            );
            switch (selectedRate.value.rateTypeId.unit) {
                case 'мин':
                    dispatch(
                        PriceChangeAction(
                            selectedRate.value.price * time + additionCost
                        )
                    );
                    break;
                case '7 дней':
                    dispatch(
                        PriceChangeAction(
                            selectedRate.value.price *
                                Math.ceil(time / (60 * 24 * 7)) +
                                additionCost
                        )
                    );
                    break;
                default:
                    dispatch(
                        PriceChangeAction(
                            selectedRate.value.price *
                                Math.ceil(time / (60 * 24)) +
                                additionCost
                        )
                    );
            }
        } else {
            dispatch(PriceChangeAction(null));
        }
    }, [
        selectedDates.from,
        selectedDates.to,
        selectedRate.value,
        additionals,
        car.value,
        dispatch,
    ]);

    return (
        <div className='spec'>
            <div className='spec__head'>Ваш заказ:</div>
            <div className='spec__body'>
                {Object.values(order)
                    .reduce((acc, cur) => {
                        if (cur && cur.cart && cur.cart.value) {
                            acc.push(cur.cart);
                        }
                        return acc;
                    }, [])
                    .map(({ name, value }: Cart) => (
                        <SpecItem key={name} label={name} value={value!} />
                    ))}
                {order.additionals.map(({ id, name, selected }) =>
                    selected ? (
                        <SpecItem key={id} label={name} value='Да' />
                    ) : null
                )}
            </div>
            {cost ? (
                <div className='spec__cost'>
                    <span>Цена:</span> {cost}
                </div>
            ) : null}
            <div className='spec__next'>
                {details && orderStatusId === ORDER_STATUS_ID.CANCEL ? null : (
                    <Button
                        disabled={
                            details ? false : !tabs[activeTabIndex].complete
                        }
                        fullsize
                        onClick={handleNext}
                        bg={details ? 3 : 0}
                    >
                        {details ? 'Отменить' : tabs[activeTabIndex].btnText}
                    </Button>
                )}
            </div>
        </div>
    );
};
