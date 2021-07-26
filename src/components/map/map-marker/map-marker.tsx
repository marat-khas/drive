import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CitySelectAction, PointSelectAction } from '@state/order/actions';
import { getCities, getCity, getPoints } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './map-marker.scss';

import { MapMarkerProps } from './types';

export const MapMarker: FC<MapMarkerProps> = ({ id }) => {
    const dispatch = useDispatch();

    const selectedCity = useSelector(getCity);

    const cities = useSelector(getCities);
    const points = useSelector(getPoints);

    const clickHandle = () => {
        const newPoint = points?.filter((point) => point.id === id)[0];
        if (!selectedCity.value) {
            const newCity = cities?.filter(
                (city) => city.id === newPoint?.cityId.id
            )[0];
            dispatch(CitySelectAction(newCity!));
        }
        dispatch(PointSelectAction(newPoint!));
        dispatch(TabCompleteAction(0, true));
        dispatch(TabAvailableAction(1, true));
    };

    return <div className='map-marker' onClick={clickHandle} />;
};
