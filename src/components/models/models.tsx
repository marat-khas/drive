import { FC } from 'react';

import modelImg1 from '@assets/img/model1.png';
import modelImg2 from '@assets/img/model2.png';
import modelImg3 from '@assets/img/model3.png';
import modelImg4 from '@assets/img/model4.png';
import { ModelsCard } from '@components/models/models-card';
import { ModelsFilter } from '@components/models/models-filter';

import './models.scss';

export const Models: FC = () => {
    const models = [
        {
            title: 'ELANTRA',
            cost: {
                from: '12 000',
                to: '25 000',
            },
            img: modelImg1,
        },
        {
            title: 'i30 N',
            cost: {
                from: '10 000',
                to: '32 000',
            },
            img: modelImg2,
        },
        {
            title: 'CRETA',
            cost: {
                from: '12 000',
                to: '25 000',
            },
            img: modelImg3,
        },
        {
            title: 'SONATA',
            cost: {
                from: '10 000',
                to: '32 000',
            },
            img: modelImg4,
        },
    ];
    return (
        <div className='models'>
            <div className='models__filter'>
                <ModelsFilter />
            </div>
            <div className='models__cards'>
                {models.map(({ title, cost, img }) => (
                    <div className='models__card'>
                        <ModelsCard title={title} cost={cost} img={img} />
                    </div>
                ))}
            </div>
        </div>
    );
};
