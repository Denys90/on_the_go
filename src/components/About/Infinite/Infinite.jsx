import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/swiper-bundle.css';

import bg from 'assets/Images/one.jpg';
import two from 'assets/Images/tow.jpg';
import third from 'assets/Images/third.jpg';
import fourth from 'assets/Images/fourth.jpg';
import five from 'assets/Images/five.jpg';
import sex from 'assets/Images/sex.jpg';
import { useEffect, useRef } from 'react';

export const Infinite = () => {
  const swiperElRef = useRef(null);

  useEffect(() => {
    swiperElRef.current.addEventListener('swiperprogress', (e) => {
      const [swiper, progress] = e.detail;
      console.log(progress);
      console.log(swiper);
    });

    swiperElRef.current.addEventListener('swiperslidechange', () => {
      console.log('slide changed');
    });
  }, []);

  return (
    <>
      <Swiper
        ref={swiperElRef}
        slides-per-view={1}
        navigation={true}
        pagination={true}
      >
        <SwiperSlide>
          <img src={bg} alt="image" width="500" height="500" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="image" width="500" height="500" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={third} alt="image" width="500" height="500" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={fourth} alt="image" width="500" height="500" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} alt="image" width="500" height="500" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={sex} alt="image" width="500" height="500" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};
