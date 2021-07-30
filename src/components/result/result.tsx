import { FC } from 'react';
import { useSelector } from 'react-redux';

import { getAdditionals, getCar } from '@state/selectors';

import './result.scss';

export const Result: FC = () => {
    const selectedCar = useSelector(getCar).value;
    const selectedAdditionals = useSelector(getAdditionals);
    const info = [];
    if (selectedCar?.tank) {
        info.push([
            'Топливо',
            selectedAdditionals[0].selected ? '100%' : `${selectedCar?.tank}%`,
        ]);
    }
    if (selectedCar?.description) {
        info.push(['Особенности', selectedCar?.description]);
    }

    return (
        <div className='result'>
            {selectedCar ? (
                <div className='result__wrapper'>
                    <div className='result__part'>
                        <div className='result__model'>{selectedCar?.name}</div>
                        {selectedCar?.number ? (
                            <div className='result__number'>
                                {selectedCar?.number}
                            </div>
                        ) : null}
                        {info.map((item) => (
                            <div className='result__item' key={item[0]}>
                                <div className='result__property'>
                                    {item[0]}
                                </div>
                                <div className='result__value'>{item[1]}</div>
                            </div>
                        ))}
                    </div>
                    <div className='result__part'>
                        <div className='result__img'>
                            <img src={selectedCar?.thumbnail.path} alt='' />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Загрузка параметров заказа</p>
            )}
        </div>
    );
};
