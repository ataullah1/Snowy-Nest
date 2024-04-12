import { useLoaderData } from 'react-router-dom';
import PropertiCard from './PropertiCard';
import { useState } from 'react';
import { MdArrowRightAlt } from 'react-icons/md';

const Propertices = () => {
  const [showDta, setShowDta] = useState(6);
  const data = useLoaderData();

  console.log(data.length);
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="pt-16 text-2xl sm:text-3xl text-center font-bold">
        Out Featured Premium Properties
      </h1>
      <p className="text-base text-center max-w-[700px] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eligendi
        delur distinctio iusto? Tempora numquam non quos!
      </p>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.slice(0, showDta).map((dta) => (
          <PropertiCard key={dta.id} dta={dta} />
        ))}
      </div>
      <p className="py-2 px-4 text-center cursor-pointer mt-8 underline flex items-center gap-2 justify-center hover:text-redLi text-lg" onClick={()=>setShowDta(dta.length)}>
        View More Properties
        <span className="text-2xl">
          <MdArrowRightAlt />
        </span>
      </p>
    </div>
  );
};

export default Propertices;
