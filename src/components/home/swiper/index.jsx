import React from "react"
import {Swiper, SwiperSlide} from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import {Pagination, Autoplay} from "swiper/modules"

const SwiperComponent = () => {
    return (
        <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{clickable: true}}
            autoplay={{delay: 4000, disableOnInteraction: false}}
            loop
            className="w-full h-85 max-[900px]:h-60 max-[500px]:h-40 max-[460px]:h-32">
            <SwiperSlide>
                <img
                    src="https://statica.alifshop.uz/shop/catalog/carousel/270/1738232138-Сайт главная 1600х491.png"
                    alt="Slide 1"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://statica.alifshop.uz/shop/catalog/carousel/268/1737111160-sokany_ru_1600х491.png"
                    alt="Slide 2"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://statica.alifshop.uz/shop/catalog/carousel/261/1735129880-One plus one 1600x491 RU.png"
                    alt="Slide 3"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>

            <SwiperSlide>
                <img
                    src="https://statica.alifshop.uz/shop/catalog/carousel/265/1736504229-shop_Genau_1600x491_ru.png"
                    alt="Slide 4"
                    className="w-full h-full object-fill rounded-xl"
                />
            </SwiperSlide>
        </Swiper>
    )
}

export default SwiperComponent
