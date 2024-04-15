import Marquee from 'react-fast-marquee';
import imag1 from '../../assets/sliderImg/card/15.jpg';
import { BiBookmark } from 'react-icons/bi';
import { FcReadingEbook } from 'react-icons/fc';

const ClaintReview = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Client Reviews</h1>
        <p className="text-slate-400 pt-2 pb-8 max-w-[650px] mx-auto">
          {`SnowyNest's clients rave about seamless transactions, exceptional
          service, and finding their dream homes. Trust our community's
          testimonials for your next property journey.`}
        </p>
      </div>
      <Marquee className="h-[600px]">
        <div>
          <div className="bg-white w-[380px] mx-auto p-3 border rounded-lg duration-200 space-y-3 hover:shadow-lg">
            <div className="relative w-full h-56">
              <div className="relative w-full h-full">
                <img
                  className="rounded-lg w-full h-full bg-cover overflow-hidden"
                  src={imag1}
                  alt=""
                />
                <div className="absolute bg-[#00000047] w-full h-full top-0 left-0 right-0 bottom-0 rounded-lg"></div>
              </div>
              <div className="absolute bottom-3 w-full flex justify-between px-4 items-center">
                <span>
                  <FcReadingEbook />
                </span>
                <span className="text-white hover:text-redLi bg-[#17161689] p-2 rounded-md cursor-pointer">
                  <BiBookmark />
                </span>
              </div>
            </div>
            <div className="space-y-2 px-3">
              <div className="space-y-3">
                <h1 className="text-2xl font-bold text-black">
                  amar sonaree bangelafsad
                </h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                  minima quam at? Impedit magnam, magni optio molestiae eveniet
                  ducimus ullam!.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClaintReview;
