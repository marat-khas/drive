import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getCar } from '@state/selectors';

import './result.scss';

export const Result: FC = () => {
    const selectedCar = useSelector(getCar);
    return (
        <div className='result'>
            {selectedCar ? (
                <div className='result__wrapper'>
                    <div className='result__part'>
                        <div className='result__model'>
                            {selectedCar.value?.name}
                        </div>
                        <div className='result__number'>K 761 HA 73</div>
                        <div className='result__item'>
                            <div className='result__property'>Топливо</div>
                            <div className='result__value'>100%</div>
                        </div>
                        <div className='result__item'>
                            <div className='result__property'>Доступна с</div>
                            <div className='result__value'>
                                12.06.2019 12:00
                            </div>
                        </div>
                    </div>
                    <div className='result__part'>
                        <div className='result__img'>
                            <img
                                src={selectedCar.value?.thumbnail.path}
                                alt=''
                            />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Загрузка параметров заказа</p>
            )}
        </div>
    );
};
