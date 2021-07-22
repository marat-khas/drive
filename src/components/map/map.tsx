import { FC } from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { MapMarker } from '@components/map/map-marker/map-marker';
import { places } from '@mocks/location';
import { getCity, getPoint } from '@state/selectors';

import './map.scss';

const defaultMapProps = {
    center: places[0].coord,
    zoom: 11,
};

export const Map: FC = () => {
    const city = useSelector(getCity);
    const point = useSelector(getPoint);
    return (
        <div className='map'>
            <div className='map__title'>Выбрать на карте:</div>
            <div className='map__container'>
                <GoogleMapReact
                    bootstrapURLKeys={{
                        key: process.env.GOOGLE_MAPS_API_KEY as string,
                        language: 'ru',
                        region: 'ru',
                    }}
                    defaultCenter={defaultMapProps.center}
                    defaultZoom={defaultMapProps.zoom}
                    center={
                        point?.coord || city?.coord || defaultMapProps.center
                    }
                    zoom={point ? 14 : 11}
                >
                    {(city || places[0]).points.map(({ id, addr, coord }) => (
                        <MapMarker
                            key={addr}
                            cityId={city ? city.id : 0}
                            pointId={id}
                            addr={addr}
                            lat={coord.lat}
                            lng={coord.lng}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        </div>
    );
};
