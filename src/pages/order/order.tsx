import { FC } from 'react';

import { Header } from '@components/header';
import { OrderSlider } from '@components/order-slider';
import { Spec } from '@components/spec';
import { Tabs } from '@components/tabs';

import './order.scss';

export const Order: FC = () => (
  <div className='order'>
    <div className='order__head'>
      <div className='container'>
        <Header />
      </div>
    </div>
    <div className='order__tabs'>
      <div className='container'>
        <Tabs />
      </div>
    </div>
    <div className='order__body'>
      <div className='container'>
        <div className='order__wrapper'>
          <div className='order__steps'>
            <div className='order__slider'>
              <OrderSlider />
            </div>
          </div>
          <div className='order__result'>
            <Spec />
          </div>
        </div>
      </div>
    </div>
  </div>
);
