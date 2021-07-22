import { FC } from 'react';
import { useSelector } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import { places } from '@mocks/location';
import { getCity, getPoint } from '@state/selectors';

import './map.scss';

const defaultMapProps = {
    center: places[0].coord,
    zoom: 11,
};

const Marker: FC<{ lat: number; lng: number }> = () => (
    <div className='map__marker' />
);

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
                        // eslint-disable-next-line no-nested-ternary
                        point
                            ? point.coord
                            : city
                            ? city.coord
                            : defaultMapProps.center
                    }
                    zoom={point ? 14 : 11}
                >
                    {(city || places[0]).points.map((office) => (
                        <Marker
                            key={office.addr}
                            lat={office.coord.lat}
                            lng={office.coord.lng}
                        />
                    ))}
                </GoogleMapReact>
            </div>
        </div>
    );
};
