import { FC } from 'react';
import { useSelector } from 'react-redux';

import GoogleMapReact from 'google-map-react';

import { places } from '@mocks/location';
import { getCity, getPoint } from '@state/selectors';

import './map.scss';

const defaultMapProps = {
  center: places[0].coord,
  zoom: 11
};

const Marker: FC<{ lat: number; lng: number }> = () => <div className='map__marker'></div>;

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
          center={point ? point.coord : city ? city.coord : defaultMapProps.center}
          zoom={point ? 14 : 11}
        >
          {
            (city ? city : places[0]).points.map((point) => (
              <Marker
                key={point.addr}
                lat={point.coord.lat}
                lng={point.coord.lng}
              />
            ))
          }
        </GoogleMapReact>
      </div>
    </div>
  )
}
