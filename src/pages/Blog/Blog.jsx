// import BlogCard from '../../components/BlogCard/BlogCard';

import image1 from '../../assets/BlogBanner/3.jpg';
import image2 from '../../assets/BlogBanner/2.jpg';
import image3 from '../../assets/BlogBanner/1.jpg';
import image4 from '../../assets/BlogBanner/2.jpg';
import profile1 from '../../assets/client pic/1.jpg';
import profile2 from '../../assets/client pic/2.jpg';
import profile3 from '../../assets/client pic/3.jpg';
import profile4 from '../../assets/client pic/4.png';
import { Link } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';
import { BiRightArrow, BiSearch } from 'react-icons/bi';
import { Helmet } from 'react-helmet';
const Blog = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <div>
        <div
          className="h-72 overflow-hidden bg-cover bg-no-repeat p-12 text-center relative"
          style={{
            backgroundImage: `url(${image1})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div
            className="absolute bottom-0 left-0 right-0 top-0 h-72 w-full overflow-hidden bg-fixed"
            style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
          >
            <div className="h-full w-full absolute top-[50%] left-1/2 -translate-x-1/2 text-3xl font-bold z-10 text-white">
              <div>
                <Link to={'/'}>Home /</Link>
                <Link to={'/blog'}> Blog</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <BlogCard /> */}
      <div className="flex flex-col lg:flex-row gap-10 w-11/12 mx-auto py-10">
        <div className="min-h-16 w-full lg:w-3/5 flex flex-col gap-8">
          <div
            data-aos="fade-right"
            data-aos-delay="300"
            className="bg-white shadow-lg rounded-lg"
          >
            <div className="w-full rounded-t-xl">
              <img className="w-full rounded-t-lg" src={image1} alt="" />
            </div>
            <div className="p-3 sm:p-5">
              <h1 className="text-3xl font-bold pb-2">
                Find Your Snowy Sanctuary!{' '}
              </h1>
              <p className="text-slate-400 ">
                Escape to picturesque winter retreats with our curated selection
                of homes amidst snow-kissed landscapes. Discover your cozy haven
                today!
              </p>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <img
                    className="mr-auto sm:mr-0 h-10 sm:h-16 w-10 sm:w-16 rounded-full border border-redLi"
                    src={profile1}
                    alt=""
                  />
                  <div>
                    <h1 className="text-sm sm:text-xl font-bold">Emma Frost</h1>
                    <p className="text-lg font-bold text-slate-400">
                      Property Consultant
                    </p>
                  </div>
                  <p className="sm:text-lg font-semibold sm:pl-2 flex items-center gap-2 text-sm">
                    <MdDateRange />
                    March, 10, 2024
                  </p>
                </div>
                <Link className="block py-2 px-3 sm:px-5 text-redLi border border-redLi rounded-md font-semibold active:scale-90 hover:bg-redLi hover:text-white duration-150">
                  Learn More...
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            className="bg-white shadow-lg rounded-lg"
          >
            <div className="w-full rounded-t-xl">
              <img className="w-full rounded-t-lg" src={image2} alt="" />
            </div>
            <div className="p-3 sm:p-5">
              <h1 className="text-3xl font-bold pb-2">
                Understanding the Current Market.
              </h1>
              <p className="text-slate-400 ">
                Dive into the latest trends in residential real estate,
                including pricing, demand, and inventory levels. Discuss how
                these factors influence buyer and seller behavior and offer
                predictions for the future of the market.
              </p>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <img
                    className="mr-auto sm:mr-0 h-10 sm:h-16 w-10 sm:w-16 rounded-full border border-redLi"
                    src={profile2}
                    alt=""
                  />
                  <div>
                    <h1 className="text-sm sm:text-xl font-bold">Emma Frost</h1>
                    <p className="text-lg font-bold text-slate-400">
                      Property Consultant
                    </p>
                  </div>
                  <p className="sm:text-lg font-semibold sm:pl-2 flex items-center gap-2 text-sm">
                    <MdDateRange />
                    March, 10, 2024
                  </p>
                </div>
                <Link className="block py-2 px-3 sm:px-5 text-redLi border border-redLi rounded-md font-semibold active:scale-90 hover:bg-redLi hover:text-white duration-150">
                  Learn More...
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            className="bg-white shadow-lg rounded-lg"
          >
            <div className="w-full rounded-t-xl">
              <img className="w-full rounded-t-lg" src={image3} alt="" />
            </div>
            <div className="p-3 sm:p-5">
              <h1 className="text-3xl font-bold pb-2">
                The Benefits of Living in a Walkable Neighborhood
              </h1>
              <p className="text-slate-400 ">
                Explore the increasing desire for walkable communities and how
                this preference is shaping the residential real estate
                landscape. Highlight the health, environmental, and social
                benefits of living in areas with easy access to amenities.
              </p>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <img
                    className="mr-auto sm:mr-0 h-10 sm:h-16 w-10 sm:w-16 rounded-full border border-redLi"
                    src={profile3}
                    alt=""
                  />
                  <div>
                    <h1 className="text-sm sm:text-xl font-bold">Emma Frost</h1>
                    <p className="text-lg font-bold text-slate-400">
                      Property Consultant
                    </p>
                  </div>
                  <p className="sm:text-lg font-semibold sm:pl-2 flex items-center gap-2 text-sm">
                    <MdDateRange />
                    March, 10, 2024
                  </p>
                </div>
                <Link className="block py-2 px-3 sm:px-5 text-redLi border border-redLi rounded-md font-semibold active:scale-90 hover:bg-redLi hover:text-white duration-150">
                  Learn More...
                </Link>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-down"
            className="bg-white shadow-lg rounded-lg"
          >
            <div className="w-full rounded-t-xl">
              <img className="w-full rounded-t-lg" src={image4} alt="" />
            </div>
            <div className="p-3 sm:p-5">
              <h1 className="text-3xl font-bold pb-2">
                Tips for First-Time Homebuyers
              </h1>
              <p className="text-slate-400 ">
                Provide a comprehensive guide for individuals looking to
                purchase their first home. Cover topics such as budgeting, the
                importance of a good credit score, understanding mortgages, and
                navigating the home buying process.
              </p>
              <hr className="my-4" />
              <div className="flex justify-between items-center">
                <div className="flex flex-col sm:flex-row gap-2 items-center">
                  <img
                    className="mr-auto sm:mr-0 h-10 sm:h-16 w-10 sm:w-16 rounded-full border border-redLi"
                    src={profile4}
                    alt=""
                  />
                  <div>
                    <h1 className="text-sm sm:text-xl font-bold">Emma Frost</h1>
                    <p className="text-lg font-bold text-slate-400">
                      Property Consultant
                    </p>
                  </div>
                  <p className="sm:text-lg font-semibold sm:pl-2 flex items-center gap-2 text-sm">
                    <MdDateRange />
                    March, 10, 2024
                  </p>
                </div>
                <Link className="block py-2 px-3 sm:px-5 text-redLi border border-redLi rounded-md font-semibold active:scale-90 hover:bg-redLi hover:text-white duration-150">
                  Learn More...
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <div className="bg-white shadow-lg p-5 rounded-lg">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Here"
                className="py-2 px-4 text-lg outline-none border rounded-md w-full"
              />
              <span className="absolute top-1/2 -translate-y-1/2 right-3 text-xl">
                <BiSearch />
              </span>
            </div>
            <div className="my-4">
              <h1 data-aos="zoom-out-right" className="text-2xl font-bold pb-5">
                Featured Listings
              </h1>
              <div className="flex flex-col gap-10">
                <div
                  data-aos="zoom-out-left"
                  className="shadow-md p-2 rounded-lg flex items-center gap-2"
                >
                  <div
                    className="h-28 w-1/3 bg-red-200 rounded-md"
                    style={{
                      backgroundImage: `url(${image3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  {/* <img src={image1} className="w-52 rounded-l-md" alt="" /> */}
                  <div className="w-2/3 flex flex-col justify-between">
                    <h1 className="text-2xl font-bold text-slate-600">
                      Sunset Studio
                    </h1>
                    <h1 className="text-2xl font-bold text-redLi py-3">
                      $13,000<span className="text-lg font-semibold">/mo</span>
                    </h1>
                    <p className="">Beds: 4 Baths: 2 Sq Ft: 5280</p>
                  </div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  className="shadow-md p-2 rounded-lg flex items-center gap-2"
                >
                  <div
                    className="h-28 w-1/3 bg-red-200 rounded-md"
                    style={{
                      backgroundImage: `url(${image1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  {/* <img src={image1} className="w-52 rounded-l-md" alt="" /> */}
                  <div className="w-2/3 flex flex-col justify-between">
                    <h1 className="text-2xl font-bold text-slate-600">
                      Sunset Studio
                    </h1>
                    <h1 className="text-2xl font-bold text-redLi py-3">
                      $13,000<span className="text-lg font-semibold">/mo</span>
                    </h1>
                    <p className="">Beds: 4 Baths: 2 Sq Ft: 5280</p>
                  </div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  className="shadow-md p-2 rounded-lg flex items-center gap-2"
                >
                  <div
                    className="h-28 w-1/3 bg-red-200 rounded-md"
                    style={{
                      backgroundImage: `url(${image1})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  {/* <img src={image1} className="w-52 rounded-l-md" alt="" /> */}
                  <div className="w-2/3 flex flex-col justify-between">
                    <h1 className="text-2xl font-bold text-slate-600">
                      Sunset Studio
                    </h1>
                    <h1 className="text-2xl font-bold text-redLi py-3">
                      $13,000<span className="text-lg font-semibold">/mo</span>
                    </h1>
                    <p className="">Beds: 4 Baths: 2 Sq Ft: 5280</p>
                  </div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  className="shadow-md p-2 rounded-lg flex items-center gap-2"
                >
                  <div
                    className="h-28 w-1/3 bg-red-200 rounded-md"
                    style={{
                      backgroundImage: `url(${image3})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  {/* <img src={image1} className="w-52 rounded-l-md" alt="" /> */}
                  <div className="w-2/3 flex flex-col justify-between">
                    <h1 className="text-2xl font-bold text-slate-600">
                      Sunset Studio
                    </h1>
                    <h1 className="text-2xl font-bold text-redLi py-3">
                      $13,000<span className="text-lg font-semibold">/mo</span>
                    </h1>
                    <p className="">Beds: 4 Baths: 2 Sq Ft: 5280</p>
                  </div>
                </div>
                <div
                  data-aos="zoom-out-left"
                  className="shadow-md p-2 rounded-lg flex items-center gap-2"
                >
                  <div
                    className="h-28 w-1/3 bg-red-200 rounded-md"
                    style={{
                      backgroundImage: `url(${image4})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                    }}
                  ></div>
                  {/* <img src={image1} className="w-52 rounded-l-md" alt="" /> */}
                  <div className="w-2/3 flex flex-col justify-between">
                    <h1 className="text-2xl font-bold text-slate-600">
                      Sunset Studio
                    </h1>
                    <h1 className="text-2xl font-bold text-redLi py-3">
                      $13,000<span className="text-lg font-semibold">/mo</span>
                    </h1>
                    <p className="">Beds: 4 Baths: 2 Sq Ft: 5280</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="zoom-out-left"
            className="bg-white shadow-lg p-5 rounded-lg mt-8 sm:mt-16"
          >
            <h1 className="text-2xl font-bold pb-5">Categories Property</h1>
            <div className="flex flex-col gap-5 px-2">
              <div className="flex justify-between items-center gap-5">
                <p className="flex items-center gap-2">
                  <BiRightArrow /> Apartment
                </p>
                <p>6 properties</p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <p className="flex items-center gap-2">
                  <BiRightArrow /> Town House
                </p>
                <p>90 properties</p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <p className="flex items-center gap-2">
                  <BiRightArrow /> Modern Villa
                </p>
                <p>16 properties</p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <p className="flex items-center gap-2">
                  <BiRightArrow /> Family House
                </p>
                <p>60 properties</p>
              </div>
              <div className="flex justify-between items-center gap-5">
                <p className="flex items-center gap-2">
                  <BiRightArrow /> Condo
                </p>
                <p>30 properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Helmet>
        <title>Blog | SnowyNest</title>
      </Helmet>
    </div>
  );
};

export default Blog;
