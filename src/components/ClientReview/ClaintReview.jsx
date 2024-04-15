import Marquee from 'react-fast-marquee';
import pic1 from '../../assets/client pic/1.jpg';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
const ClaintReview = () => {
  return (
    <div>
      <div className="text-center pb-5">
        <h1 className="text-4xl font-bold">What Our Client Say ?</h1>
        <p className="text-slate-400 pt-2 pb-8 max-w-[650px] mx-auto">
          {`SnowyNest's clients rave about seamless transactions, exceptional
          service, and finding their dream homes. Trust our community's
          testimonials for your next property journey.`}
        </p>
      </div>
      <Marquee className="">
        <div className="flex flex-row gap-12 h-72">
          <div className="max-w-96 text-center shadow-md border p-4 rounded-xl">
            <img
              className="h-20 w-20 rounded-full mx-auto mb-2"
              src={pic1}
              alt=""
            />
            <div>
              <h1 className="font-bold text-2xl">Emily Wilson</h1>
              <p className=" text-slate-400 text-base pb-2 font-semibold text-center">
                Accountant
              </p>
              <p className="italic text-sm text-slate-400 ">
                {` "SnowyNest's expertise and support were invaluable in finding my
              dream home. Smooth process from start to finish. Highly recommend
              their services!"`}
              </p>
              <div className="flex items-center justify-center mt-1 gap-2 text-yellow-500 ">
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarHalf />
                </span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div className="flex flex-row gap-12 h-72">
          <div className="max-w-96 text-center shadow-md border p-4 rounded-xl">
            <img
              className="h-20 w-20 rounded-full mx-auto mb-2"
              src={pic1}
              alt=""
            />
            <div>
              <h1 className="font-bold text-2xl">Jacob Johnson</h1>
              <p className=" text-slate-400 text-base pb-2 font-semibold text-center">
                Sales Manager
              </p>
              <p className="italic text-sm text-slate-400 ">
                {` "SnowyNest made selling my property effortless. Their professionalism and market knowledge ensured a quick and profitable sale. Impressed with their service!"`}
              </p>
              <div className="flex items-center justify-center mt-1 gap-2 text-yellow-500 ">
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarHalf />
                </span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div className="flex flex-row gap-12 h-72">
          <div className="max-w-96 text-center shadow-md border p-4 rounded-xl">
            <img
              className="h-20 w-20 rounded-full mx-auto mb-2"
              src={pic1}
              alt=""
            />{' '}
            <div>
              <h1 className="font-bold text-2xl">Lisa Johnson</h1>
              <p className=" text-slate-400 text-base pb-2 font-semibold text-center">
                Marketing Manager
              </p>
              <p className="italic text-sm text-slate-400 ">
                {` "SnowyNest helped me find my dream home swiftly. Their professionalism and support made the process stress-free. Highly recommended"`}
              </p>
              <div className="flex items-center justify-center mt-1 gap-2 text-yellow-500 ">
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarFill />
                </span>
                <span>
                  <BsStarHalf />
                </span>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </Marquee>
    </div>
  );
};

export default ClaintReview;
