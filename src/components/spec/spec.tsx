import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getActiveTabIndex, getTabs } from '@state/selectors';
import { TabActiveAction } from '@state/tabs/actions';

import { Button } from '@components/button';
import { SpecItem } from '@components/spec/spec-item';

import './spec.scss';

export const Spec: FC = () => {
    const dispatch = useDispatch();
    const tabs = useSelector(getTabs);
    const activeTabIndex = useSelector(getActiveTabIndex);
    const nextHandle = () => {
        dispatch(TabActiveAction(activeTabIndex + 1));
    };
    return (
        <div className='spec'>
            <div className='spec__head'>Ваш заказ:</div>
            <div className='spec__body'>
                <SpecItem
                    name='Пункт выдачи'
                    value='Ульяновск, /nНариманова&nbsp;42'
                />
            </div>
            <div className='spec__cost'>
                <span>Цена:</span> от 8 000 до 12 000 ₽
            </div>
            <div className='spec__next'>
                <Button
                    disabled={!tabs[activeTabIndex].complete}
                    fullsize
                    onClick={nextHandle}
                >
                    {tabs[activeTabIndex].btnText}
                </Button>
            </div>
        </div>
    );
};
