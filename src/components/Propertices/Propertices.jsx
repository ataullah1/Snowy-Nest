import PropertiCard from './PropertiCard';

const Propertices = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="pt-16 text-2xl sm:text-3xl text-center font-bold">
        Out Featured Premium Properties
      </h1>
      <p className="text-base text-center max-w-[700px] mx-auto">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eligendi
        delur distinctio iusto? Tempora numquam non quos!
      </p>
      <div>
        <PropertiCard />
        <PropertiCard />
        <PropertiCard />
      </div>
    </div>
  );
};

export default Propertices;
