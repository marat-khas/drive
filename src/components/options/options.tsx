import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Checkbox } from '@components/common/checkbox';
import { Radio } from '@components/common/radio';
import { OptionsColor } from '@components/options/options-color';
import { OptionsDate } from '@components/options/options-date';
import { getColor, getDate } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './options.scss';

export const Options: FC = () => {
    const tariff = [
        {
            id: 0,
            name: 'Поминутно, 7₽/мин',
        },
        {
            id: 1,
            name: 'На сутки, 1999 ₽/сутки',
        },
    ];
    const additional = [
        {
            id: 0,
            name: 'Полный бак, 500р',
        },
        {
            id: 1,
            name: 'Детское кресло, 200р',
        },
        {
            id: 2,
            name: 'Правый руль, 1600р',
        },
    ];

    const dispatch = useDispatch();

    const selectedColor = useSelector(getColor);
    const selectedDates = useSelector(getDate);

    useEffect(() => {
        const complete = Boolean(
            selectedColor.value && selectedDates.from && selectedDates.to
        );
        dispatch(TabCompleteAction(2, complete));
        dispatch(TabAvailableAction(3, complete));
    }, [selectedColor.value, selectedDates.from, selectedDates.to, dispatch]);

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
                    {tariff.map(({ id, name }) => (
                        <div className='options__input' key={id}>
                            <Radio
                                name='options-tariff'
                                id={`options-tariff${id}`}
                            >
                                {name}
                            </Radio>
                        </div>
                    ))}
                </div>
            </div>
            <div className='options__item'>
                <div className='options__title'>Доп услуги</div>
                <div className='options__part'>
                    {additional.map(({ id, name }) => (
                        <div className='options__input' key={id}>
                            <Checkbox
                                name='options-dop'
                                id={`options-dop${id}`}
                            >
                                {name}
                            </Checkbox>
                        </div>
                    ))}
                </div>
            </div>
        </form>
    );
};
