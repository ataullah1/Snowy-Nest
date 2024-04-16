// import BlogCard from '../../components/BlogCard/BlogCard';

import image1 from '../../assets/sliderImg/3.jpg';
import profile1 from '../../assets/client pic/1.jpg';
import { Link } from 'react-router-dom';
import { MdDateRange } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
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
        <div className="min-h-16 w-full lg:w-3/5 bg-white shadow-lg rounded-lg">
          <div className="rounded-t-lg">
            <div className="w-full rounded-t-xl">
              <img className="w-full rounded-t-lg" src={image1} alt="" />
            </div>
            <div className="p-3 sm:p-5">
              <h1 className="text-3xl font-bold pb-2">Blog Title line </h1>
              <p className="text-slate-400 ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                nihil! Assumenda consectetur aut nam temporibus molestiae quod,
                corporis facere minima minus vitae nulla architecto molestias
                nobis. Rem molestias labore earum?
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
                    <h1 className="text-sm sm:text-xl font-bold">Ataullah</h1>
                    <p className="text-lg font-bold text-slate-400">
                      Softwer engeenr
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
        <div className="min-h-16 w-full lg:w-2/5 bg-white shadow-lg p-5 rounded-lg">
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
            <h1 className="text-2xl font-bold pb-5">Resent Post Blog</h1>
            <div>
              <div className="border-t border-b rounded-lg flex items-center gap-2">
                <div className="h-28 w-1/3 bg-red-200 rounded-md"></div>
                {/* <img src={image1} className="w-52 rounded-l-md" alt="" /> */}
                <div className="w-2/3">
                  <h1 className="text-2xl font-bold text-slate-600">
                    This is Title
                  </h1>
                  <p className="text-slate-400 text-sm">
                    This is description Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Quo, quam!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
