import { FC } from 'react';

import ModelImg from '@assets/img/model.png';

import './result.scss';

export const Result: FC = () => (
    <div className='result'>
        <div className='result__wrapper'>
            <div className='result__part'>
                <div className='result__model'>Hyndai, i30 N</div>
                <div className='result__number'>K 761 HA 73</div>
                <div className='result__item'>
                    <div className='result__property'>Топливо</div>
                    <div className='result__value'>100%</div>
                </div>
                <div className='result__item'>
                    <div className='result__property'>Доступна с</div>
                    <div className='result__value'>12.06.2019 12:00</div>
                </div>
            </div>
            <div className='result__part'>
                <div className='result__img'>
                    <img src={ModelImg} alt='' />
                </div>
            </div>
        </div>
    </div>
);
