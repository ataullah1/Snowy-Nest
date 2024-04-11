import card1 from '../../assets/sliderImg/card/1.jpg';
// import card2 from '../../assets/sliderImg/card/2.jpg';

const PropertiCard = () => {
  return (
    <div className="bg-white max-w-[500px] mx-auto p-2 border border-red-500 rounded-lg">
      <div className="relative">
        <div>
          <img className="rounded-lg " src={card1} alt="" />
          <div>

          </div>
        </div>
        <h1 className="text-2xl text-redLi absolute bottom-3 left-3 font-bold">
          $13,000 <span className="text-lg">/mo</span>
        </h1>
      </div>
      <h1 className="text-2xl font-bold text-slate-600">
        Lorem ipsum dolor sit amet.
      </h1>
    </div>
    // <div>
    //   <div
    //     className="relative h-72 rounded-lg overflow-hidden bg-cover bg-no-repeat p-12 text-center"
    //     style={{
    //       backgroundImage: `url(${card2})`,
    //       backgroundPosition: 'center',
    //       backgroundSize: 'cover',
    //       backgroundRepeat: 'no-repeat',
    //     }}
    //   >
    //     <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-[#0000004e] z-30"></div>
    //   </div>
    // </div>
  );
};

export default PropertiCard;
