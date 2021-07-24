import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Button } from '@components/button';

import './main-slide.scss';

import { MainSlideProps } from './types';

export const MainSlide: FC<MainSlideProps> = ({
    img,
    title,
    desc,
    link,
    btnType,
}) => (
    <div className='main-slide' style={{ backgroundImage: `url(${img})` }}>
        <div className='main-slide__container'>
            <div className='main-slide__info'>
                <div className='main-slide__title'>{title}</div>
                <div className='main-slide__desc'>{desc}</div>
            </div>
            <div className='main-slide__btn'>
                <Link to={link}>
                    <Button bg={btnType}>Подробнее</Button>
                </Link>
            </div>
        </div>
    </div>
);
