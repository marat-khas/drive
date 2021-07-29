import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/common/button';
import { SpecItem } from '@components/spec/spec-item';
import { Cart } from '@state/order/types';
import { getActiveTabIndex, getCar, getOrder, getTabs } from '@state/selectors';
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
        dispatch(TabActiveAction(activeTabIndex + 1));
    };
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
            {car.value ? (
                <div className='spec__cost'>
                    <span>Цена:</span>
                    {` от ${numSpace(car.value.priceMin)} до ${numSpace(
                        car.value.priceMax
                    )} ₽`}
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
