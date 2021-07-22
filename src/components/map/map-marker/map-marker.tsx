import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { places } from '@mocks/location';
import { ChangeCityAction, ChangePointAction } from '@state/location/actions';
import { CartClearAction, ProductAddAction } from '@state/order/actions';
import { getCity } from '@state/selectors';

import './map-marker.scss';

import { MapMarkerProps } from './types';

export const MapMarker: FC<MapMarkerProps> = ({
    cityId,
    pointId,
    addr,
    lat,
    lng,
}) => {
    const dispatch = useDispatch();

    const city = useSelector(getCity);

    const clickHandle = () => {
        if (!city) {
            dispatch(ChangeCityAction(places[cityId]));
        }

        dispatch(
            ChangePointAction({
                id: pointId,
                addr,
                coord: { lat, lng },
            })
        );
        dispatch(CartClearAction());
        dispatch(
            ProductAddAction({
                name: 'Пункт выдачи',
                info: places[cityId].points[pointId].addr,
            })
        );
    };

    return <div className='map-marker' onClick={clickHandle} />;
};
