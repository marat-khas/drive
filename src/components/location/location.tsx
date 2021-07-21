import { FC, useState } from 'react';
import Select from 'react-select';

import './location.scss';

import { places } from './mocks';

export const Location: FC = () => {
    const [city, setCity] = useState<string | undefined>(undefined);
    const [point, setPoint] = useState<string | undefined>(undefined);
    const cityChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        if (selectedOption === null) {
            setCity(undefined);
            setPoint(undefined);
            // action disable
        } else {
            setCity(selectedOption?.value);
        }
    };

    const pointChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        if (selectedOption === null) {
            setPoint(undefined);
            // action disable
        } else {
            setPoint(selectedOption?.value);
        }
    };
    return (
        <div className='location'>
            <form className='form'>
                <div className='form__body'>
                    <div className='form__item'>
                        <div className='form__label'>Город</div>
                        <div className='form__input'>
                            <Select
                                placeholder='Выберите город'
                                isClearable
                                onChange={cityChange}
                                options={places.map((place) => ({
                                    value: place.city,
                                    label: place.city,
                                }))}
                            />
                        </div>
                    </div>
                    <div className='form__item'>
                        <div className='form__label'>Пункт выдачи</div>
                        <div className='form__input'>
                            <Select
                                value={
                                    city && point
                                        ? {
                                              value: point,
                                              label: point,
                                          }
                                        : null
                                }
                                placeholder='Начните вводить пункт ...'
                                isClearable
                                onChange={pointChange}
                                options={
                                    city === undefined
                                        ? []
                                        : places
                                              .filter(
                                                  (place) => place.city === city
                                              )[0]
                                              .points.map((office) => ({
                                                  value: office.addr,
                                                  label: office.addr,
                                              }))
                                }
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
