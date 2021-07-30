import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LocationSelect } from '@components/location/location-select';
import { GetCitiesAction } from '@state/cities/actions';
import { CitySelectAction, PointSelectAction } from '@state/order/actions';
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

    const cityValue = selectedCity.value
        ? {
              value: selectedCity.value.id,
              label: selectedCity.value.name,
          }
        : null;

    const cityOptions = cities
        ? cities.map(({ id, name }) => ({
              value: id,
              label: name,
          }))
        : [];

    const pointValue = selectedPoint.value
        ? {
              value: selectedPoint.value.id,
              label: selectedPoint.value.address,
          }
        : null;

    const pointOptions = points
        ? points.reduce(
              (
                  acc: { value: string; label: string }[],
                  { id, address, cityId }
              ) => {
                  if (cityId.id === selectedCity.value?.id) {
                      acc.push({
                          value: id,
                          label: address,
                      });
                  }
                  return acc;
              },
              []
          )
        : [];

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

    useEffect(() => {
        const complete = !!selectedPoint.value;
        dispatch(TabCompleteAction(0, complete));
        dispatch(TabAvailableAction(1, complete));
    }, [selectedPoint.value, dispatch]);

    const cityChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        if (selectedOption === null) {
            dispatch(CitySelectAction(null));
        } else if (selectedOption.value !== undefined) {
            const newCity = cities?.find(
                (city) => city.id === selectedOption?.value
            );
            dispatch(CitySelectAction(newCity!));
        }
        dispatch(PointSelectAction(null));
    };

    const pointChange = (
        selectedOption: {
            value: string | undefined;
            label: string | undefined;
        } | null
    ) => {
        if (selectedOption === null) {
            dispatch(PointSelectAction(null));
        } else if (selectedOption.value !== undefined) {
            const newPoint = points?.find(
                (point) => point.id === selectedOption?.value
            );
            dispatch(PointSelectAction(newPoint!));
        }
    };

    return (
        <div className='location'>
            <form className='form'>
                <div className='form__body'>
                    {cities ? (
                        <LocationSelect
                            label='Город'
                            value={cityValue}
                            placeholder='Выберите город'
                            options={cityOptions}
                            handleChange={cityChange}
                        />
                    ) : (
                        <p>Загрузка городов ...</p>
                    )}
                    {points ? (
                        <LocationSelect
                            label='Пункт выдачи'
                            value={pointValue}
                            placeholder='Начните вводить пункт ...'
                            options={pointOptions}
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
