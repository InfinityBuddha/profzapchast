import React from 'react';
import Swiper from 'react-id-swiper';
import './styles.scss'
import '../../../node_modules/react-id-swiper/src/styles/scss/swiper.scss'


export class Carousel extends React.Component {
    render() {
        const params = {
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            paginationClickable: true,
            spaceBetween: 30,
            loop: true,
            grabCursor: true
        };

        return (
            <Swiper
                {...params}
                pagination={params.pagination}
                navigation={params.navigation}
            >
                <div className="swiper-slide">
                    <div className="promo__text-group">
                        <h1 className="promo__title">Сабельная пила RedVerg RD-SS95</h1>
                        <h3 className="promo__subtitle">3 100 р.</h3>
                        <a href="#" className="btn btn__promo" id="btn-promo">Связаться с нами</a>
                    </div>
                </div>
                <div className="swiper-slide swiper-slide--2">
                    <div className="promo__text-group">
                        <h1 className="promo__title">Дрель RedVerg Basic ID500S ударная</h1>
                        <h3 className="promo__subtitle">1 850р.</h3>
                        <a href="#" className="btn btn__promo" id="btn-promo">Связаться с нами</a>
                    </div>
                </div>
                <div className="swiper-slide swiper-slide--3">
                    <div className="promo__text-group">
                        <h1 className="promo__title">Бензиновый триммер Redverg RD-GB226</h1>
                        <h3 className="promo__subtitle">4 800 р.</h3>
                        <a href="#" className="btn btn__promo" id="btn-promo">Связаться с нами</a>
                    </div>
                </div>
            </Swiper>
        )
    }
}

export default Carousel;
