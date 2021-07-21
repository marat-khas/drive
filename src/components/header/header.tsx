import { FC } from 'react';

import LocationIco from '@assets/img/ico_location.svg';

import './header.scss';

export const Header: FC = () => (
    <header className='header'>
        <div className='header__logo'>Need for drive</div>
        <div className='header__location'>
            <a href='/'>
                <LocationIco />
                <span>Ульяновск</span>
            </a>
        </div>
    </header>
);
