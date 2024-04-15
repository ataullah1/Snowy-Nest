import images from '../../assets/sliderImg/5.jpg';
const Contact = () => {
  return (
    <div className="w-11/12 mx-auto mt-28 flex flex-col-reverse md:flex-row gap-4 md:gap-8 lg:gap-28 justify-between">
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
      <div className="w-full md:w-[55%] lg:w-[45%] flex items-center bg-emerald-50">
        <div
          className="w-full h-72 md:min-h-[350px] lg:min-h-[510px] rounded-tl-[100px] rounded-tr-3xl sm:rounded-tr-none md:rounded-tl-[200px] lg:rounded-tl-[300px] rounded-br-3xl border-2 border-redLi"
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

export default Contact;
