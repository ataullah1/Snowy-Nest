import { MdCall, MdLocationCity, MdWhatsapp } from 'react-icons/md';
import images from '../../assets/sliderImg/3.jpg';
import { SiGmail } from 'react-icons/si';
const ContactSec = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row gap-4 md:gap-8 lg:gap-28 justify-between">
      <div className="w-full md:w-3/5">
        <h1
          data-aos="fade-right"
          className="text-4xl md:text-5xl font-bold text-redLi border-b-4 border-slate-500 inline-block"
        >
          Contact Us
        </h1>

        <p data-aos="fade-down" className="max-w-[600px] text-slate-400 my-6">
          {` Reach out to SnowyNest for personalized assistance in navigating the
          real estate market. Whether you're buying, selling, or seeking
          information, our team is dedicated to helping you achieve your
          property goals.`}
        </p>
        <div className="shadow-lg h-80 mt-10 rounded-lg  grid grid-cols-2">
          <div
            data-aos="fade-down"
            className="w-full flex items-center justify-center bg-red-300 rounded-tl-lg"
          >
            <div className="text-center p-3">
              <span className="mx-auto inline-block text-6xl">
                <MdLocationCity />
              </span>
              <p>Mirpur 10, Dhaka, Bangladesh</p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="w-full text-center flex items-center justify-center bg-gray-300 rounded-tr-lg"
          >
            <div className="text-center p-3">
              <span className="mx-auto inline-block text-6xl">
                <MdCall />
              </span>
              <p>+880 1719-199967</p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="w-full text-center flex items-center justify-center bg-green-200 rounded-bl-lg"
          >
            <div className="text-center p-3">
              <span className="mx-auto inline-block text-6xl">
                <MdWhatsapp />
              </span>
              <p>+880 1719-199967</p>
            </div>
          </div>
          <div
            data-aos="fade-down"
            className="w-full text-center flex items-center justify-center bg-yellow-300 rounded-br-lg"
          >
            <div className="text-center p-3">
              <span className="mx-auto inline-block text-6xl">
                <SiGmail />
              </span>
              <p>ataullahm100 @gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[55%] lg:w-[45%] flex items-center">
        <div
          data-aos="zoom-out-down"
          className="w-full h-72 md:min-h-[350px] lg:min-h-[510px] rounded-tl-[100px] rounded-tr-3xl sm:rounded-tr-none md:rounded-tl-[180px] lg:rounded-tl-[250px] rounded-br-3xl border-2 border-redLi"
          style={{
            backgroundImage: `url(${images})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* <img src={images} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default ContactSec;
