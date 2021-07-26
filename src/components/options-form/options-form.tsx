import { FC } from 'react';

import { Checkbox } from '@components/common/checkbox';
import { Input } from '@components/common/input';
import { Radio } from '@components/common/radio';

import './options-form.scss';

export const OptionsForm: FC = () => {
    const colors = [
        {
            id: 0,
            name: 'Любой',
        },
        {
            id: 1,
            name: 'Красный',
        },
        {
            id: 2,
            name: 'Голубой',
        },
    ];
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

    return (
        <form className='options-form'>
            <div className='options-form__item'>
                <div className='options-form__title'>Цвет</div>
                <div className='options-form__part options-form__part--row'>
                    {colors.map(({ id, name }) => (
                        <div className='options-form__input' key={id}>
                            <Radio
                                name='options-form-color'
                                id={`options-form-color${id}`}
                            >
                                {name}
                            </Radio>
                        </div>
                    ))}
                </div>
            </div>
            <div className='options-form__item'>
                <div className='options-form__title'>Дата аренды</div>
                <div className='options-form__part'>
                    <div className='options-form__input'>
                        <div className='form__body'>
                            <div className='form__item'>
                                <div className='form__label'>
                                    <label htmlFor='options-form-date-from'>
                                        С
                                    </label>
                                </div>
                                <div className='form__input'>
                                    <Input id='options-form-date-from' />
                                </div>
                            </div>
                            <div className='form__item'>
                                <div className='form__label'>
                                    <label htmlFor='options-form-date-to'>
                                        По
                                    </label>
                                </div>
                                <div className='form__input'>
                                    <Input id='options-form-date-to' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='options-form__item'>
                <div className='options-form__title'>Тариф</div>
                <div className='options-form__part'>
                    {tariff.map(({ id, name }) => (
                        <div className='options-form__input' key={id}>
                            <Radio
                                name='options-form-tariff'
                                id={`options-form-tariff${id}`}
                            >
                                {name}
                            </Radio>
                        </div>
                    ))}
                </div>
            </div>
            <div className='options-form__item'>
                <div className='options-form__title'>Доп услуги</div>
                <div className='options-form__part'>
                    {additional.map(({ id, name }) => (
                        <div className='options-form__input' key={id}>
                            <Checkbox
                                name='options-form-dop'
                                id={`options-form-dop${id}`}
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
