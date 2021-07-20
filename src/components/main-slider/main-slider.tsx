import { FC } from 'react';
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import IcoNext from '@assets/img/ico_next.svg';
import IcoPrev from '@assets/img/ico_prev.svg';
import slideImg1 from '@assets/img/main_slide1_bg.jpg';
import slideImg2 from '@assets/img/main_slide2_bg.jpg';
import slideImg3 from '@assets/img/main_slide3_bg.jpg';
import slideImg4 from '@assets/img/main_slide4_bg.jpg';
import { MainSlide } from '@components/main-slider/main-slide';
import { ROUTES } from '@constants/routes';

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './main-slider.scss';

SwiperCore.use([Autoplay, Navigation, Pagination]);

export const MainSlider: FC = () => (
    <div className='main-slider'>
        <Swiper
            slidesPerView={1}
            loop
            autoplay={{
                delay: 4000
            }}
            navigation={{
                prevEl: '.main-slider-nav__btn--prev',
                nextEl: '.main-slider-nav__btn--next',
            }}
            pagination={{
                el: '.main-slider-pagination',
                bulletClass: 'main-slider-pagination__bullet',
                bulletActiveClass: 'main-slider-pagination__bullet--active',
                clickable: true,
            }}
        >
            <SwiperSlide>
                <MainSlide
                    img={slideImg1}
                    title='Бесплатная парковка'
                    desc='Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.'
                    link={ROUTES.ORDER}
                />
            </SwiperSlide>
            <SwiperSlide>
                <MainSlide
                    img={slideImg2}
                    title='Страховка'
                    desc='Полная страховка страховка автомобиля'
                    link={ROUTES.ORDER}
                />
            </SwiperSlide>
            <SwiperSlide>
                <MainSlide
                    img={slideImg3}
                    title='Бензин'
                    desc='Полный бак на любой заправке города за наш счёт'
                    link={ROUTES.ORDER}
                />
            </SwiperSlide>
            <SwiperSlide>
                <MainSlide
                    img={slideImg4}
                    title='Обслуживание'
                    desc='Автомобиль проходит еженедельное ТО'
                    link={ROUTES.ORDER}
                />
            </SwiperSlide>
        </Swiper>
        <div className='main-slider-nav'>
            <div className='main-slider-nav__btn main-slider-nav__btn--prev'>
                <IcoPrev />
            </div>
            <div className='main-slider-nav__btn main-slider-nav__btn--next'>
                <IcoNext />
            </div>
        </div>
        <div className='main-slider-pagination' />
    </div>
);
