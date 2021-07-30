import { FC } from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { MapMarker } from '@components/map/map-marker/map-marker';
import { getCities, getCity, getPoint, getPoints } from '@state/selectors';

import './map.scss';

const ZOOM_CITY = 11;
const ZOOM_POINT = 14;

export const Map: FC = () => {
    const selectedCity = useSelector(getCity);
    const selectedPoint = useSelector(getPoint);

    const cities = useSelector(getCities);
    const points = useSelector(getPoints);

    return (
        <div className='map'>
            <div className='map__title'>Выбрать на карте:</div>
            <div className='map__container'>
                {cities && points ? (
                    <GoogleMapReact
                        bootstrapURLKeys={{
                            key: process.env.GOOGLE_MAPS_API_KEY as string,
                            language: 'ru',
                            region: 'ru',
                        }}
                        defaultCenter={cities[0].coords}
                        defaultZoom={ZOOM_CITY}
                        center={
                            selectedPoint.value
                                ? selectedPoint.value.coords
                                : (selectedCity.value || cities[0]).coords
                        }
                        zoom={selectedPoint.value ? ZOOM_POINT : ZOOM_CITY}
                    >
                        {points.map(({ address, id, coords }) => (
                            <MapMarker
                                key={id}
                                id={id}
                                addr={address}
                                lat={coords!.lat}
                                lng={coords!.lng}
                            />
                        ))}
                    </GoogleMapReact>
                ) : (
                    <p>Загрузка данных ...</p>
                )}
            </div>
        </div>
    );
};
