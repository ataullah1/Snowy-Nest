// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
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
          <div>
            <h1>Find Your Dream Home At Snowy Nest.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>Your Property, Our Priority.</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>Buy the property of your choice.</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
