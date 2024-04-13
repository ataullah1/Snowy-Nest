import { useLoaderData, useParams } from 'react-router-dom';

const PropertiDetails = () => {
  const { viewId } = useParams();
  const dta = useLoaderData();
  const filterDta = dta.filter((dta) => dta.id === viewId);
  const {
    image,
    image1,
    image2,
    image3,
    image4,
    facilities,
    full_description,
    estate_title,
  } = filterDta[0];
  //   console.log(filterDta[0]);
  return (
    <div>
      <div className="bg-slate-900 h-20"></div>
      <div className="w-full grid gap-1 rounded-md grid-cols-2 lg:grid-cols-5 grid-rows-5 lg:grid-rows-2 relative bg-white mb-10">
        <div
          className="bg-green-200 col-span-2 lg:col-span-3 row-span-3 lg:row-span-2 "
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
          className="bg-yellow-100 row-span-2 md:row-span-1 "
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div
          className="bg-fuchsia-200 row-span-2 md:row-span-1 "
          style={{
            backgroundImage: `url(${image2})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div
          className="bg-sky-200 hidden md:block "
          style={{
            backgroundImage: `url(${image3})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div
          className="bg-green-700 hidden md:block "
          style={{
            backgroundImage: `url(${image4})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            borderRadius: '12px',
          }}
        ></div>
        <div className="bg-[#01000039] absolute top-0 left-0 w-full z-20 h-full rounded-lg"></div>
      </div>
      <div className="bg-[#F7F7F7] py-8">
        <div className="w-11/12 mx-auto">
          <div className="min-h-48 flex flex-col md:flex-row gap-2 md:gap-4">
            <div className="w-2/3 bg-white rounded-xl p-4 lg:p-8">
              <h1 className="text-4xl font-bold text-[#000000d0] pb-3">
                {estate_title}
              </h1>
              <div>
                <button className="py-2 px-4 bg-[#F7F7F7] text-black rounded-md">
                  baler mata
                </button>
              </div>
            </div>
            <div className="w-1/3 bg-white rounded-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiDetails;
