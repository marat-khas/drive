import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { OptionsColor } from '@components/options/options-color';
import { OptionsDate } from '@components/options/options-date';
import { getColor, getDate, getRate } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './options.scss';

import { OptionsAdditional } from './options-additional';
import { OptionsRate } from './options-rate/options-rate';

export const Options: FC = () => {
    const dispatch = useDispatch();

    const selectedColor = useSelector(getColor);
    const selectedDates = useSelector(getDate);
    const selectedRate = useSelector(getRate);

    useEffect(() => {
        const complete = Boolean(
            selectedColor.value &&
                selectedDates.from &&
                selectedDates.to &&
                selectedRate.value
        );
        dispatch(TabCompleteAction(2, complete));
        dispatch(TabAvailableAction(3, complete));
    }, [
        selectedColor.value,
        selectedDates.from,
        selectedDates.to,
        selectedRate.value,
        dispatch,
    ]);

    return (
        <form className='options'>
            <div className='options__item'>
                <div className='options__title'>Цвет</div>
                <div className='options__part options__part--row'>
                    <OptionsColor />
                </div>
            </div>
            <div className='options__item'>
                <div className='options__title'>Дата аренды</div>
                <div className='options__part'>
                    <OptionsDate />
                </div>
            </div>
            <div className='options__item'>
                <div className='options__title'>Тариф</div>
                <div className='options__part'>
                    <OptionsRate />
                </div>
            </div>
            <div className='options__item'>
                <div className='options__title'>Доп услуги</div>
                <div className='options__part'>
                    <OptionsAdditional />
                </div>
            </div>
        </form>
    );
};
