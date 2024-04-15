import images from '../../assets/sliderImg/5.jpg';
const OurValue = () => {
  return (
    <div className="w-11/12 mx-auto mt-28 flex flex-col-reverse md:flex-row-reverse gap-4 md:gap-8 lg:gap-28 justify-between">
      <div className="w-full md:w-3/5">
        <h1 className="text-4xl md:text-5xl font-bold text-redLi border-b-4 border-slate-500 inline-block">
          Our Value
        </h1>
        <p className="text-3xl md:text-4xl font-semibold text-slate-600 my-5">
          We cherish your trust,
        </p>
        <p className="max-w-[600px] text-slate-400">
          Dedicated to offering exceptional service. Our commitment to creating
          a nurturing living space stems from our belief that it profoundly
          enhances life quality.
        </p>
        <div className="flex flex-col gap-5 mt-5">
          <div className="collapse collapse-arrow bg-base-200 shadow-md shadow-fuchsia-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-xl font-medium">
              Best price on the market.
            </div>
            <div className="collapse-content">
              <p className="text-slate-500">
                SnowyNest guarantees the best price on the market, ensuring
                affordability without compromising quality, making your dream
                home within reach.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 shadow-md shadow-fuchsia-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              We will give you lifetime support.
            </div>
            <div className="collapse-content">
              <p className="text-slate-500">
                SnowyNest stands by you for a lifetime, offering unwavering
                support, guidance, and assistance, ensuring your residential
                experience is hassle-free and fulfilling.
              </p>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-200 shadow-md shadow-fuchsia-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-xl font-medium">
              Navigate the Property Market Confidently
            </div>
            <div className="collapse-content">
              <p className="text-slate-500">
                Gain access to expert analysis and personalized advice for
                buying or selling properties efficiently
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[55%] lg:w-[45%] flex items-center">
        <div
          className="w-full h-72 md:min-h-[350px] lg:min-h-[510px] rounded-tr-[100px] rounded-tl-3xl sm:rounded-tl-none md:rounded-tr-[180px] lg:rounded-tr-[250px] rounded-bl-3xl border-2 border-redLi"
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

export default OurValue;
