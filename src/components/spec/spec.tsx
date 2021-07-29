import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/common/button';
import { SpecItem } from '@components/spec/spec-item';
import { ConfirmShowAction } from '@state/order/actions';
import { Cart } from '@state/order/types';
import {
    getActiveTabIndex,
    getAdditionals,
    getCar,
    getDate,
    getOrder,
    getRate,
    getTabs,
} from '@state/selectors';
import { TabActiveAction } from '@state/tabs/actions';
import { numSpace } from '@utils/num-space';

import './spec.scss';

export const Spec: FC = () => {
    const dispatch = useDispatch();
    const car = useSelector(getCar);
    const tabs = useSelector(getTabs);
    const order = useSelector(getOrder);
    const activeTabIndex = useSelector(getActiveTabIndex);

    const handleNext = () => {
        if (activeTabIndex === 3) {
            dispatch(ConfirmShowAction());
        } else {
            dispatch(TabActiveAction(activeTabIndex + 1));
        }
    };

    const selectedDates = useSelector(getDate);
    const selectedRate = useSelector(getRate);
    const additionals = useSelector(getAdditionals);

    const [cost, setCost] = useState<string | null>(null);

    useEffect(() => {
        const additionCost = additionals.reduce(
            (acc, cur) => (cur.selected ? acc + cur.cost : acc),
            0
        );

        if (selectedDates.from && selectedDates.to && selectedRate.value) {
            const time = Math.ceil(
                (selectedDates.to.getTime() - selectedDates.from.getTime()) /
                    (1000 * 60)
            );
            switch (selectedRate.value.rateTypeId.unit) {
                case 'мин':
                    setCost(
                        `${numSpace(
                            selectedRate.value.price * time + additionCost
                        )} ₽`
                    );
                    break;
                case '7 дней':
                    setCost(
                        `${numSpace(
                            selectedRate.value.price *
                                Math.ceil(time / (60 * 24 * 7)) +
                                additionCost
                        )} ₽`
                    );
                    break;
                default:
                    setCost(
                        `${numSpace(
                            selectedRate.value.price *
                                Math.ceil(time / (60 * 24)) +
                                additionCost
                        )} ₽`
                    );
            }
        } else if (car.value) {
            setCost(
                ` от ${numSpace(car.value.priceMin)} до ${numSpace(
                    car.value.priceMax
                )} ₽`
            );
        } else {
            setCost(null);
        }
    }, [
        selectedDates.from,
        selectedDates.to,
        selectedRate.value,
        additionals,
        car.value,
    ]);

    return (
        <div className='spec'>
            <div className='spec__head'>Ваш заказ:</div>
            <div className='spec__body'>
                {Object.values(order)
                    .reduce((acc, cur) => {
                        if (cur.cart && cur.cart.value) {
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
                <Button
                    disabled={!tabs[activeTabIndex].complete}
                    fullsize
                    onClick={handleNext}
                >
                    {tabs[activeTabIndex].btnText}
                </Button>
            </div>
        </div>
    );
};
