// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';

// image input
import slide1 from '../../assets/sliderImg/1.jpg';

import Nav from '../Nav/Nav';

const Banner = () => {
  return (
    <div className="">
      <div className="fixed w-full z-50">
        <Nav />
      </div>

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, Keyboard]}
        className="mySwiper min-h-screen"
      >
        <SwiperSlide>
          <div
            className="min-h-screen flex items-center justify-center"
            style={{
              backgroundImage: ` url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1>Find Your Dream Home At Snowy Nest.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="min-h-screen flex items-center justify-center"
            style={{
              backgroundImage: `
             url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1>Your Property, Our Priority.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="min-h-screen flex items-center justify-center"
            style={{
              backgroundImage: ` url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <h1>Buy the property of your choice.</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
