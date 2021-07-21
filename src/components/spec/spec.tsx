import { FC } from 'react';
import { useSelector } from 'react-redux';

import { Button } from '@components/button';
import { SpecItem } from '@components/spec/spec-item';
import { getActiveTabIndex, getTabs } from '@state/selectors';

import './spec.scss';

export const Spec: FC = () => {
  const tabs = useSelector(getTabs);
  const activeTabIndex = useSelector(getActiveTabIndex);
  return (
    <div className='spec'>
      <div className='spec__head'>Ваш заказ:</div>
      <div className='spec__body'>
        <SpecItem 
         name='Пункт выдачи'
         value='Ульяновск, /nНариманова&nbsp;42' 
        />
      </div>
      <div className='spec__cost'><span>Цена:</span> от 8 000 до 12 000 ₽</div>
      <div className='spec__next'>
        <Button disabled={!tabs[activeTabIndex].complete} fullsize={true}>Выбрать модель</Button>
      </div>
    </div>
  )
}