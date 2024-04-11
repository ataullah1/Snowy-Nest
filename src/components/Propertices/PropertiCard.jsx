import { FaRegHeart } from 'react-icons/fa';
import card1 from '../../assets/sliderImg/card/1.jpg';
// import card2 from '../../assets/sliderImg/card/2.jpg';

const PropertiCard = () => {
  return (
    <div className="bg-white max-w-[500px] mx-auto p-3 border rounded-lg hover:scale-105 duration-200">
      <div className="relative">
        <div className="relative">
          <img className="rounded-lg " src={card1} alt="" />
          <div className="absolute bg-[#00000047] w-full h-full top-0 left-0 right-0 bottom-0 rounded-lg"></div>
        </div>
        <div className="absolute bottom-3 w-full flex justify-between px-4 items-center">
          <h1 className="text-2xl text-white font-bold">
            $13,000<span className="text-lg">/mo</span>
          </h1>
          <span className="text-white bg-[#17161689] p-2 rounded-md cursor-pointer">
            <FaRegHeart />
          </span>
        </div>
        <button className="bg-redLi py-1 px-2 absolute top-3 right-3 rounded-md text-white text-sm">
          For Rent
        </button>
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
