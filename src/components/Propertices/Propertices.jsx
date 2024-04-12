import { useLoaderData } from 'react-router-dom';
import PropertiCard from './PropertiCard';

const Propertices = () => {
  const data = useLoaderData();
  // console.log(data);
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
        {data.map((dta) => (
          <PropertiCard key={dta.id} dta={dta} />
        ))}
      </div>
    </div>
  );
};

export default Propertices;
