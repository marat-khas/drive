import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import SwiperCore from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Location } from '@components/location';
import { Map } from '@components/map';
import { Models } from '@components/models';
import { OptionsForm } from '@components/options-form';
import { getActiveTabIndex, getCategory } from '@state/selectors';

import 'swiper/swiper.scss';

export const OrderSlider: FC = () => {
    const [swiper, setSwiper] = useState<SwiperCore>();
    const activeTabIndex = useSelector(getActiveTabIndex);

    const category = useSelector(getCategory);

    useEffect(() => {
        if (swiper) {
            swiper.slideTo(activeTabIndex);
        }
    }, [swiper, activeTabIndex]);

    useEffect(() => {
        swiper?.update();
    }, [category, swiper]);

    return (
        <Swiper
            allowTouchMove={false}
            simulateTouch={false}
            autoHeight
            onSwiper={(s) => {
                setSwiper(s);
            }}
        >
            <SwiperSlide>
                <Location />
                <Map />
            </SwiperSlide>
            <SwiperSlide>
                <Models />
            </SwiperSlide>
            <SwiperSlide>
                <OptionsForm />
            </SwiperSlide>
            <SwiperSlide>Step 4</SwiperSlide>
        </Swiper>
    );
};
