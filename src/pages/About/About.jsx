import { Link } from 'react-router-dom';
import image1 from '../../assets/sliderImg/7.jpg';
const About = () => {
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
                <Link to={'/about'}> About</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center w-full gap-10">
          <div className="w-full md:w-[55%] bg-yellow-300 h-72">
            <h1>Thext</h1>
          </div>
          <div className="w-full md:w-[45%] bg-purple-600 h-72">
            {/* <img src="" alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
