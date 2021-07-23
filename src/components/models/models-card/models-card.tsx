import { FC } from 'react';

import './models-card.scss';

import { ModelsCardProps } from './types';

export const ModelsCard: FC<ModelsCardProps> = ({ title, cost, img }) => (
    <div className='models-card'>
        <div className='models-card__head'>
            <div className='models-card__title'>{title}</div>
            <div className='models-card__cost'>{`${cost.from} - ${cost.to} ₽`}</div>
        </div>
        <div className='models-card__img'>
            <img src={img} alt={title} />
        </div>
    </div>
);
