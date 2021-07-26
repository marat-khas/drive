import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LocationSelect } from '@components/location/location-select';
import { GetCitiesAction } from '@state/cities/actions';
import {
    CartClearAction,
    CitySelectAction,
    PointSelectAction,
    ProductAddAction,
} from '@state/order/actions';
import { GetPointsAction } from '@state/points/actions';
import { getCities, getCity, getPoint, getPoints } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './location.scss';

export const Location: FC = () => {
    const dispatch = useDispatch();

    const selectedCity = useSelector(getCity);
    const selectedPoint = useSelector(getPoint);
    const cities = useSelector(getCities);
    const points = useSelector(getPoints);

    useEffect(() => {
        if (!cities) {
            dispatch(GetCitiesAction());
        }
    }, [cities, dispatch]);

    useEffect(() => {
        if (!points) {
            dispatch(GetPointsAction());
        }
    }, [points, dispatch]);

    const cityChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        if (selectedOption === null) {
            dispatch(CitySelectAction(null));
            dispatch(TabCompleteAction(0, false));
            dispatch(TabAvailableAction(1, false));
        } else if (selectedOption.value !== undefined) {
            const newCity = cities?.filter(
                (city) => city.id === selectedOption?.value
            )[0];
            dispatch(CitySelectAction(newCity!));
        }
        dispatch(PointSelectAction(null));
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
            dispatch(PointSelectAction(null));
            dispatch(TabCompleteAction(0, false));
            dispatch(TabAvailableAction(1, false));
        } else if (selectedOption.value !== undefined) {
            const newPoint = points?.filter(
                (point) => point.id === selectedOption?.value
            )[0];
            dispatch(PointSelectAction(newPoint!));
            dispatch(
                ProductAddAction({
                    name: 'Пункт выдачи',
                    info: newPoint!.address,
                })
            );
            dispatch(TabCompleteAction(0, true));
            dispatch(TabAvailableAction(1, true));
        }
    };

    return (
        <div className='location'>
            <form className='form'>
                <div className='form__body'>
                    {cities ? (
                        <LocationSelect
                            label='Город'
                            value={
                                selectedCity
                                    ? {
                                          value: selectedCity.id,
                                          label: selectedCity.name,
                                      }
                                    : null
                            }
                            placeholder='Выберите город'
                            options={cities.map(({ id, name }) => ({
                                value: id,
                                label: name,
                            }))}
                            handleChange={cityChange}
                        />
                    ) : (
                        <p>Загрузка городов ...</p>
                    )}
                    {points ? (
                        <LocationSelect
                            label='Пункт выдачи'
                            value={
                                selectedPoint
                                    ? {
                                          value: selectedPoint.id,
                                          label: selectedPoint.address,
                                      }
                                    : null
                            }
                            placeholder='Начните вводить пункт ...'
                            options={points
                                .filter(
                                    (point) =>
                                        point.cityId.id === selectedCity?.id
                                )
                                .map(({ id, address }) => ({
                                    value: id,
                                    label: address,
                                }))}
                            handleChange={pointChange}
                        />
                    ) : (
                        <p>Загрузка пунктов выдачи ...</p>
                    )}
                </div>
            </form>
        </div>
    );
};
