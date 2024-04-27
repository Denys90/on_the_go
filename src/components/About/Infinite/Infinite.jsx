import { useEffect, useRef } from 'react';
import { register } from 'swiper/element/bundle';

import one from 'assets/Images/one.jpg';
import two from 'assets/Images/two.jpg';
import third from 'assets/Images/third.jpg';
import fourth from 'assets/Images/fourth.jpg';
import fifth from 'assets/Images/fifth.jpg';
import sixth from 'assets/Images/sixth.jpg';
import { ImageStyles } from './Infinite.styled';

register();

export const Infinite = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    const swiper = swiperElRef.current.swiper;
    if (swiper) {
      swiper.init();
    }
  }, []);

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        slidesPerView={1}
        navigation={true}
        pagination={{ clickable: true }}
        speed={1000}
        loop={true}
        autoplay={{ delay: 2000 }}
      >
        <swiper-slide>
          <ImageStyles src={one} alt="image" width="1000" height="1000" />
        </swiper-slide>
        <swiper-slide>
          <ImageStyles src={two} alt="image" width="1000" height="1000" />
        </swiper-slide>
        <swiper-slide>
          <ImageStyles src={third} alt="image" width="1000" height="1000" />
        </swiper-slide>
        <swiper-slide>
          <ImageStyles src={fourth} alt="image" width="1000" height="1000" />
        </swiper-slide>
        <swiper-slide>
          <ImageStyles src={fifth} alt="image" width="1000" height="1000" />
        </swiper-slide>
        <swiper-slide>
          <ImageStyles src={sixth} alt="image" width="1000" height="1000" />
        </swiper-slide>
      </swiper-container>
    </>
  );
};
