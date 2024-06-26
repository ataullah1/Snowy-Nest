import { useLoaderData } from 'react-router-dom';
import PropertiCard from './PropertiCard';
import { useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

const Propertices = () => {
  const [showDta, setShowDta] = useState(6);
  const data = useLoaderData();

  // console.log(data.length);
  return (
    <div className="w-11/12 mx-auto">
      <h1
        data-aos="fade-up"
        className="pt-16 text-2xl sm:text-3xl text-center font-bold"
      >
        Our Featured Premium Properties
      </h1>
      <p
        data-aos="fade-up"
        className="text-base text-center max-w-[700px] mx-auto text-slate-400 pt-2 leading-7"
      >
        Discover our handpicked selection of premium properties at SnowyNest.
        Explore luxurious homes and investment opportunities tailored to elevate
        your lifestyle.
      </p>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {data.slice(0, showDta).map((dta) => (
          <PropertiCard key={dta.id} dta={dta} />
        ))}
      </div>
      {showDta !== data.length && (
        <p
          data-aos="fade-down"  
          className="py-2 px-4 text-center cursor-pointer mt-8 underline flex items-center gap-2 justify-center hover:text-redLi text-lg"
          onClick={() => setShowDta(data.length)}
        >
          View More Properties
          <span className="text-2xl">
            <MdArrowRightAlt />
          </span>
        </p>
      )}
    </div>
  );
};

export default Propertices;
