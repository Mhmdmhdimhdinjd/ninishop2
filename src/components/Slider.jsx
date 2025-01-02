// SliderComponent.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation , EffectCoverflow} from 'swiper/modules';

const Slider = () => {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    loop={true}
    slidesPerView={'1.2'}
    spaceBetween={45}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
    }}
    pagination={{
      clickable: true,
    }}
    autoplay={{
      delay: 6500,
      disableOnInteraction: false,
    }}
    navigation= {true}
    modules={[EffectCoverflow, Pagination ,Autoplay , Navigation]}
    className="mySwiper1"
    >
      <SwiperSlide><img src="https://cdn.khanoumi.com/cml/carousel-big/f5/81/f58129bd9b104eaf99b249f0b16341e3.jpeg "alt="image-of-swiper" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.khanoumi.com/cml/carousel-big/90/30/9030af6bfff14420bb8a5371d1b8332e.jpeg" alt="image-of-swiper" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.khanoumi.com/cml/carousel-big/7f/4b/7f4b0f0c5dc14ec2a639f7ff7931f580.jpeg" alt="image-of-swiper" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.khanoumi.com/cml/carousel-big/f2/e2/f2e26f009d834f2a9c381ed344537816.jpeg" alt="image-of-swiper" /></SwiperSlide>
      <SwiperSlide><img src="https://cdn.khanoumi.com/cml/carousel-big/5e/fc/5efcf2c7a6364b04a1765477934dd5cb.jpeg" alt="image-of-swiper" /></SwiperSlide>
    </Swiper>
  );
};

export default Slider;
