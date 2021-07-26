import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    CartClearAction,
    CitySelectAction,
    PointSelectAction,
    ProductAddAction,
} from '@state/order/actions';
import { getCities, getCity, getPoints } from '@state/selectors';
import { TabAvailableAction, TabCompleteAction } from '@state/tabs/actions';

import './map-marker.scss';

import { MapMarkerProps } from './types';

export const MapMarker: FC<MapMarkerProps> = ({ cityId, pointId }) => {
    const dispatch = useDispatch();

    const selectedCity = useSelector(getCity);

    const cities = useSelector(getCities);
    const points = useSelector(getPoints);

    const clickHandle = () => {
        if (!selectedCity) {
            const newCity = cities?.filter((city) => city.id === cityId)[0];
            dispatch(CitySelectAction(newCity!));
        }
        const newPoint = points?.filter((point) => point.id === pointId)[0];
        dispatch(PointSelectAction(newPoint!));
        dispatch(CartClearAction());
        dispatch(
            ProductAddAction({
                name: 'Пункт выдачи',
                info: newPoint?.address!,
            })
        );
        dispatch(TabCompleteAction(0, true));
        dispatch(TabAvailableAction(1, true));
    };

    return <div className='map-marker' onClick={clickHandle} />;
};
