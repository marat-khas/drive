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

export const MainSlider: FC = () => {
    const slides = [
        {
            img: slideImg1,
            title: 'Бесплатная парковка',
            desc: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
            link: ROUTES.ORDER,
            btnType: 1,
        },
        {
            img: slideImg2,
            title: 'Страховка',
            desc: 'Полная страховка страховка автомобиля',
            link: ROUTES.ORDER,
            btnType: 2,
        },
        {
            img: slideImg3,
            title: 'Бесплатная парковка',
            desc: 'Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.',
            link: ROUTES.ORDER,
            btnType: 3,
        },
        {
            img: slideImg4,
            title: 'Обслуживание',
            desc: 'Автомобиль проходит еженедельное ТО',
            link: ROUTES.ORDER,
            btnType: 4,
        },
    ];
    return (
        <div className='main-slider'>
            <Swiper
                slidesPerView={1}
                loop
                autoplay={{
                    delay: 4000,
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
                {slides.map((slide) => (
                    <SwiperSlide>
                        <MainSlide
                            img={slide.img}
                            title={slide.title}
                            desc={slide.desc}
                            link={slide.link}
                            btnType={slide.btnType}
                        />
                    </SwiperSlide>
                ))}
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
};
