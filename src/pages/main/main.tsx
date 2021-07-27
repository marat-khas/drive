import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@components/common/button';
import { Header } from '@components/header';
import { MainSlider } from '@components/main-slider';
import { ROUTES } from '@constants/routes';

import './main.scss';

export const Main: FC = () => (
    <main className='main'>
        <div className='main-info'>
            <div className='main-info__head'>
                <Header />
            </div>
            <div className='main-info__body'>
                <div className='main-info__data'>
                    <div className='main-info__title'>
                        <h1>
                            Каршеринг <br />
                            <span>Need for drive</span>
                        </h1>
                    </div>
                    <div className='main-info__desc'>
                        Поминутная аренда авто твоего города
                    </div>
                </div>
                <div className='main-info__btn'>
                    <Link to={ROUTES.ORDER}>
                        <Button>Забронировать</Button>
                    </Link>
                </div>
            </div>
            <footer className='main-info__foot'>
                <div className='main-info__phone'>
                    <a href='tel:84952342244'>8 (495) 234-22-44</a>
                </div>
                <div className='main-info__copyright'>
                    © 2016-2019 «Need for drive»
                </div>
            </footer>
        </div>
        <MainSlider />
    </main>
);
