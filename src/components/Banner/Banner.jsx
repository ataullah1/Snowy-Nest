// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation, Keyboard } from 'swiper/modules';

// image input
import slide1 from '../../assets/sliderImg/8.jpg';

import Nav from '../Nav/Nav';
import { FaSearch } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const Banner = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let navbarClasses = ['navbar'];
  if (scrolled) {
    navbarClasses.push('scrolled');
  }

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
            className="h-[500px] md:min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center relative">
                <div className="text-white px-4 lg:px-10">
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold">
                    Buy the property of your choice.
                  </h1>
                  <p className="max-w-[700px] mx-auto py-4 text-base md:text-lg">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestias architecto animi delectus .
                  </p>
                  <div className="relative">
                    <input
                      type="text"
                      name="search"
                      className="w-full h-12 rounded-full bg-transparent border-2 my-7 px-7 text-redLi"
                      placeholder="Search Your Keyword"
                    />
                    <span className="absolute top-1/2 -translate-y-1/2 right-5 md:right-10">
                      <FaSearch />
                    </span>
                  </div>
                </div>
                {/* <div className="hidden md:block h-28 w-10/12 rounded-xl p-2 absolute bottom-6 bg-[#77777779]">
                  <div className="h-full w-full border-2 rounded-xl bg-white"></div>
                </div> */}
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 
        <SwiperSlide>
          <div
            className="min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h1 className="text-6xl font-bold">
                    Find Your Dream Home At Snowy Nest.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="min-h-screen relative overflow-hidden  bg-cover bg-no-repeat p-12 text-center"
            style={{
              backgroundImage: `url(${slide1})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div
              className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed"
              style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
            >
              <div className="flex h-full items-center justify-center">
                <div className="text-white">
                  <h1 className="text-6xl font-bold">
                    Your Property, Our Priority.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide> 
        */}
      </Swiper>
    </div>
  );
};

export default Banner;
