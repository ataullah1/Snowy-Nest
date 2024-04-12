import { FaRegHeart } from 'react-icons/fa';
import card1 from '../../assets/sliderImg/card/1.jpg';
import { SlSizeFullscreen } from 'react-icons/sl';
import { LuBedSingle } from 'react-icons/lu';
import { FaBath } from 'react-icons/fa6';
// import card2 from '../../assets/sliderImg/card/2.jpg';

const PropertiCard = () => {
  return (
    <div className="bg-white max-w-[500px] mx-auto p-3 border rounded-lg hover:scale-105 duration-200 space-y-3 hover:shadow-lg">
      <div className="relative">
        <div className="relative">
          <img className="rounded-lg " src={card1} alt="" />
          <div className="absolute bg-[#00000047] w-full h-full top-0 left-0 right-0 bottom-0 rounded-lg"></div>
        </div>
        <div className="absolute bottom-3 w-full flex justify-between px-4 items-center">
          <h1 className="text-2xl text-white font-bold">
            $13,000<span className="text-lg">/mo</span>
          </h1>
          <span className="text-white hover:text-redLi bg-[#17161689] p-2 rounded-md cursor-pointer">
            <FaRegHeart />
          </span>
        </div>
        <button className="bg-redLi py-1 px-2 absolute top-3 right-3 rounded-md text-white text-sm">
          For Rent
        </button>
      </div>
      <div className="space-y-2 px-3">
        <p className="text-redLi font-semibold">Residential</p>
        <h1 className="text-2xl font-bold text-black">
          Lorem ipsum dolor sit amet.
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis,
          quisquam?
        </p>
        <hr />
        <div className="flex items-center justify-between py-2 gap-3 text-redLi">
          <div className="bg-[#3bf5f853] w-full py-1 px-2 flex items-center justify-center rounded gap-2 text-base font-semibold">
            <span className="text-sm">
              <SlSizeFullscreen />
            </span>
            600 Sq Ft
          </div>
          <div className="bg-[#c9f15b67] w-full py-1 px-2 flex items-center justify-center rounded gap-2 text-base font-semibold">
            <span>
              <LuBedSingle />
            </span>
            4 Beds
          </div>
          <div className="bg-[#25eb8867] w-full py-1 px-2 flex items-center justify-center rounded gap-2 text-base font-semibold">
            <span>
              <FaBath />
            </span>
            3 Baths
          </div>
        </div>
        <hr className="pb-3" />
        <button className="w-full py-2 px-3 rounded-md text-base font-bold border-redLi border-2 text-redLi active:scale-95 duration-150">
          View Property
        </button>
      </div>
    </div>
  );
};

export default PropertiCard;
