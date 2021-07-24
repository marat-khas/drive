import { FC } from 'react';
import { Link } from 'react-router-dom';

import LocationIco from '@assets/img/ico_location.svg';
import { ROUTES } from '@constants/routes';

import './header.scss';

export const Header: FC = () => (
    <header className='header'>
        <div className='header__logo'>
            <Link to={ROUTES.MAIN}>Need for drive</Link>
        </div>
        <div className='header__location'>
            <span>
                <LocationIco />
                <span>Ульяновск</span>
            </span>
        </div>
    </header>
);
