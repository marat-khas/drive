import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@components/common/button';
import { SpecItem } from '@components/spec/spec-item';
import { getActiveTabIndex, getOrder, getTabs } from '@state/selectors';
import { TabActiveAction } from '@state/tabs/actions';

import './spec.scss';

export const Spec: FC = () => {
    const dispatch = useDispatch();
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
                    .filter((item) => item.value && item.cart)
                    .map((item) => (
                        <SpecItem
                            key={item.value.name}
                            label={item.cart}
                            value={item.value.name}
                        />
                    ))}
            </div>
            <div className='spec__cost'>
                <span>Цена:</span> от 8 000 до 12 000 ₽
            </div>
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
