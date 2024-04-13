import { useLoaderData, useParams } from 'react-router-dom';

const PropertiDetails = () => {
  const { viewId } = useParams();
  const dta = useLoaderData();
  const filterDta = dta.filter((dta) => dta.id === viewId);
  const { image, image1, image2, image3, image4 } = filterDta[0];
  //   console.log(filterDta[0]);
  return (
    <div>
      <div className="w-full grid gap-1 rounded-md grid-cols-2 lg:grid-cols-5 grid-rows-5 lg:grid-rows-2 relative">
        <div
          className="bg-green-200 col-span-2 lg:col-span-3 row-span-3 lg:row-span-2 border-r border-redLi"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '450px',
            borderRadius: '12px',
          }}
        ></div>
        <div
          className="bg-yellow-100 row-span-2 md:row-span-1 border border-redLi"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div
          className="bg-fuchsia-200 row-span-2 md:row-span-1 border border-redLi"
          style={{
            backgroundImage: `url(${image2})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div
          className="bg-sky-200 hidden md:block border border-redLi"
          style={{
            backgroundImage: `url(${image3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div
          className="bg-green-700 hidden md:block border border-redLi"
          style={{
            backgroundImage: `url(${image4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div className="bg-[#01000039] absolute top-0 left-0 w-full z-20 h-full"></div>
      </div>
    </div>
  );
};

export default PropertiDetails;
