import { FC } from 'react';

import LocationIco from '@assets/img/ico_location.svg';
import { Button } from '@components/button';

import './main.scss';
import { MainSlider } from '@components/main-slider';

export const Main: FC = () => (
    <div className='main'>
        <div className='main-info'>
            <header className='main-info__head'>
                <div className='main-info__logo'>Need for drive</div>
                <div className='main-info__location'>
                    <a href=''>
                        <LocationIco />
                        <span>Ульяновск</span>
                    </a>
                </div>
            </header>
            <div className='main-info__body'>
                <div className='main-info__data'>
                    <div className='main-info__title'>
                        <h1>Каршеринг <br /><span>Need for drive</span></h1>
                    </div>
                    <div className='main-info__desc'>Поминутная аренда авто твоего города</div>
                </div>
                <div className='main-info__btn'>
                    <Button>Забронировать</Button>
                </div>
            </div>
            <footer className='main-info__foot'>
                <div className='main-info__copyright'>© 2016-2019 «Need for drive»</div>
                <div className='main-info__phone'>
                    <a href='tel:84952342244'>8 (495) 234-22-44</a>
                </div>
            </footer>
        </div>
        <MainSlider />
    </div>
)