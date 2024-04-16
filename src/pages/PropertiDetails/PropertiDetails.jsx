import { Helmet } from 'react-helmet';
import { SlSizeFullscreen } from 'react-icons/sl';
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
    area,
    full_description,
    estate_title,
    price,
    last_remodel_year,
    year_built,
    rating,
    status,
    location,
  } = filterDta[0];
  //   console.log(filterDta[0]);
  return (
    <div>
      <Helmet>
        <title>Property Details | SnowyNest</title>
      </Helmet>
      <div className="bg-slate-900 h-20"></div>
      <div className="w-full grid gap-1 rounded-md grid-cols-2 lg:grid-cols-5 grid-rows-5 lg:grid-rows-2 relative bg-white mb-10">
        <div
          className="bg-green-200 col-span-2 lg:col-span-3 row-span-3 lg:row-span-2 h-[200px] sm:h-[280px] lg:h-[450px]"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
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
          className="bg-green-300 hidden md:block "
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
          <div className="min-h-48 flex flex-col lg:flex-row gap-2 md:gap-4">
            <div className="w-full lg:w-2/3 bg-white rounded-xl p-4 lg:p-8">
              <h1 className="text-4xl font-bold text-[#000000d0] pb-3">
                {estate_title}
              </h1>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="bg-[#F7F7F7] py-2 px-6 flex items-center justify-center rounded gap-2 text-base font-semibold border">
                  <span className="text-xs">
                    <SlSizeFullscreen />
                  </span>
                  {area} Sq Ft
                </div>
                {facilities.map((dta, i) => (
                  <button
                    key={i}
                    className="py-2 px-4 bg-[#F7F7F7] text-black rounded-md border"
                  >
                    {dta}
                  </button>
                ))}
              </div>
              <hr className="mt-7 mb-3" />
              <h1 className="text-2xl font-semibold pb-3">
                Property Description
              </h1>
              <p className="leading-7 text-slate-400">{full_description}</p>

              <hr className="my-6" />
              <div>
                <h1 className="text-2xl font-semibold pb-8">
                  Property Details
                </h1>
                <div className="flex justify-between gap-5 flex-col lg:flex-row text-left">
                  <div className="w-full lg:w-1/2">
                    <table className="w-full ">
                      <tr>
                        <td className="py-2">
                          <p>Price</p>
                        </td>
                        <td className="py-2">
                          <p className="font-bold">: {price}</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <p>Property Size</p>
                        </td>
                        <td className="py-2">
                          <p className="font-bold">: {area} Sq Ft</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <p>Property Status</p>
                        </td>
                        <td className="py-2 w-1/2">
                          <p className="font-bold capitalize">: {status}</p>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <div className="w-full lg:w-1/2">
                    <table className="w-full ">
                      <tr>
                        <td className="py-2 w-1/2">
                          <p className="">Property Built Year</p>
                        </td>
                        <td className="py-2">
                          <p className="font-bold">: {year_built}</p>
                        </td>
                      </tr>
                      <tr>
                        <td className="py-2">
                          <p>Last Remodel Year</p>
                        </td>
                        <td className="py-2">
                          <p className="font-bold">
                            :{' '}
                            {last_remodel_year
                              ? last_remodel_year
                              : 'Not Entry'}
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
              <p className="pt-5">
                Rating: <span className="font-bold">{rating} (40)</span>
              </p>
              <hr className="my-6" />
              <div>
                <div className="flex justify-between">
                  <h1 className="text-2xl font-semibold pb-8">Location </h1>
                  <p className="font-semibold">{location}</p>
                </div>
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45060306.91979326!2d-129.94270855000002!3d46.42366899999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2e72d55ea434f%3A0x91e2209ccaf48a86!2sTropical%20Paradise%20Properties!5e0!3m2!1sen!2sbd!4v1712984027431!5m2!1sen!2sbd"
                    className="h-52 sm:h-[330px]"
                    style={{ border: '0', width: '100%' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 h-[320px] bg-white rounded-xl p-4 xl:p-8">
              <h1 className="text-2xl font-bold pb-6">Property Price</h1>
              <div className="pb-7">
                <table className="w-full ">
                  <tr>
                    <td className="py-2">
                      <p>Price</p>
                    </td>
                    <td className="py-2">
                      <p className="font-bold">
                        : {price}
                        <span className="text-xs">/mo</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <p>Property Size</p>
                    </td>
                    <td className="py-2">
                      <p className="font-bold">: {area} Sq Ft</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-2">
                      <p>Property Status</p>
                    </td>
                    <td className="py-2 w-1/2">
                      <p className="font-bold capitalize">: {status}</p>
                    </td>
                  </tr>
                </table>
              </div>
              <div className="flex justify-between gap-2 ">
                <button className="py-2 lg:px-1 xl:px-2 w-full bg-redLi text-white font-semibold rounded-md hover:bg-transparent border-2 border-redLi hover:text-redLi duration-150 active:scale-90">
                  Book Now
                </button>
                <button className="py-2 lg:px-1 xl:px-2 w-full bg-redLi text-white font-semibold rounded-md hover:bg-transparent border-2 border-redLi hover:text-redLi duration-150 active:scale-90">
                  Save Property
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiDetails;
