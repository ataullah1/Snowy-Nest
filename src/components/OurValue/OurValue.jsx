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
      </div>
      <div
        className="w-full md:w-3/5 lg:w-2/5 h-72 md:h-[350px] lg:h-[500px] rounded-tr-[100px] rounded-tl-3xl sm:rounded-tl-none md:rounded-tr-[200px] lg:rounded-tr-[300px] rounded-bl-3xl border-2 border-redLi"
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
  );
};

export default OurValue;
