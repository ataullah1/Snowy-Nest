import BlogCard from '../../components/BlogCard/BlogCard';

import image1 from '../../assets/sliderImg/3.jpg';
import { Link } from 'react-router-dom';
const Blog = () => {
  return (
    <div>
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
      <div className="flex flex-col lg:flex-row gap-10 w-11/12 mx-auto my-10">
        <div className="min-h-16 w-full lg:w-3/5 bg-red-300 rounded-lg">
          <div className="rounded-t-lg">
            <div className="w-full rounded-t-xl">
              <img className='w-full rounded-t-lg' src={image1} alt="" />
            </div>
            <div>
              <h1>Blog Title line </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
                nihil! Assumenda consectetur aut nam temporibus molestiae quod,
                corporis facere minima minus vitae nulla architecto molestias
                nobis. Rem molestias labore earum?
              </p>

              <div>
                <div>
                  <img src="" alt="" />
                  <p>Dote 235426</p>
                </div>
                <Link>Learn More...</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="min-h-16 w-full lg:w-2/5 bg-yellow-300"></div>
      </div>
    </div>
  );
};

export default Blog;
