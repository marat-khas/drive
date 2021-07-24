import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LocationSelect } from '@components/location/location-select';
import { places } from '@mocks/location';
import { ChangeCityAction, ChangePointAction } from '@state/location/actions';
import { CartClearAction, ProductAddAction } from '@state/order/actions';
import { getCity, getPoint } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './location.scss';

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
            dispatch(ChangeCityAction(null));
            dispatch(TabCompleteAction(0, false));
            dispatch(TabAvailableAction(1, false));
        } else if (selectedOption.value !== undefined) {
            const cityId = parseInt(selectedOption?.value, 10);
            dispatch(ChangeCityAction({ ...places[cityId] }));
        }
        dispatch(ChangePointAction(null));
        dispatch(CartClearAction());
    };

    const pointChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        dispatch(CartClearAction());
        if (selectedOption === null) {
            dispatch(ChangePointAction(null));
            dispatch(TabCompleteAction(0, false));
            dispatch(TabAvailableAction(1, false));
        } else if (selectedOption.value !== undefined) {
            const pointId = parseInt(selectedOption?.value, 10);
            if (city) {
                dispatch(
                    ChangePointAction({ ...places[city.id].points[pointId] })
                );
                dispatch(
                    ProductAddAction({
                        name: 'Пункт выдачи',
                        info: places[city.id].points[pointId].addr,
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
                    <LocationSelect
                        label='Город'
                        value={
                            city
                                ? {
                                      value: city.id.toString(),
                                      label: city.name,
                                  }
                                : null
                        }
                        placeholder='Выберите город'
                        options={places.map((place) => ({
                            value: place.id.toString(),
                            label: place.name,
                        }))}
                        handleChange={cityChange}
                    />
                    <LocationSelect
                        label='Пункт выдачи'
                        value={
                            city && point
                                ? {
                                      value: point.id.toString(),
                                      label: point.addr,
                                  }
                                : null
                        }
                        placeholder='Начните вводить пункт ...'
                        options={places[city ? city.id : 0].points.map(
                            (office) => ({
                                value: office.id.toString(),
                                label: office.addr,
                            })
                        )}
                        handleChange={pointChange}
                    />
                </div>
            </form>
        </div>
    );
};
