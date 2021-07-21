import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import { ChangeCityAction, ChangePointAction } from '@state/location/actions';
import { getCity, getPoint } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './location.scss';

import { places } from './mocks';

export const Location: FC = () => {
    const dispatch = useDispatch();
    const city = useSelector(getCity);
    const point = useSelector(getPoint);

    const cityChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        if (selectedOption === null) {
            dispatch(ChangeCityAction(undefined));
            dispatch(TabCompleteAction(0, false));
            dispatch(TabAvailableAction(1, false));
        } else if (selectedOption.value !== undefined) {
            const cityId = parseInt(selectedOption?.value, 10);
            dispatch(ChangeCityAction({ ...places[cityId], id: cityId }));
        }
        dispatch(ChangePointAction(undefined));
    };

    const pointChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        if (selectedOption === null) {
            dispatch(ChangePointAction(undefined));
            dispatch(TabCompleteAction(0, false));
            dispatch(TabAvailableAction(1, false));
        } else if (selectedOption.value !== undefined) {
            const pointId = parseInt(selectedOption?.value, 10);
            if (city !== undefined) {
                dispatch(
                    ChangePointAction({
                        ...places[city.id].points[pointId],
                        id: pointId,
                    })
                );
                dispatch(TabCompleteAction(0, true));
                dispatch(TabAvailableAction(1, true));
            }
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
                                options={places.map((place, index) => ({
                                    value: index.toString(),
                                    label: place.name,
                                }))}
                            />
                        </div>
                    </div>
                    <div className='form__item'>
                        <div className='form__label'>Пункт выдачи</div>
                        <div className='form__input'>
                            <Select
                                value={
                                    city !== undefined && point !== undefined
                                        ? {
                                              value: point.id.toString(),
                                              label: point.addr,
                                          }
                                        : null
                                }
                                placeholder='Начните вводить пункт ...'
                                isClearable
                                onChange={pointChange}
                                options={
                                    city === undefined
                                        ? []
                                        : places[city.id].points.map(
                                              (office, index) => ({
                                                  value: index.toString(),
                                                  label: office.addr,
                                              })
                                          )
                                }
                            />
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};
