import { Link } from 'react-router-dom';
import image1 from '../../assets/sliderImg/7.jpg';
import image2 from '../../assets/sliderImg/card/2.jpg';
import MarqueeImg from '../../components/Marquee/MarqueeImg';
import ClaintReview from '../../components/ClientReview/ClaintReview';
import OurValue from '../../components/OurValue/OurValue';
import { Helmet } from 'react-helmet';
const About = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <Helmet>
        <title>About | SnowyNest</title>
      </Helmet>
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
      <div className="w-11/12 mx-auto">
        <div className="flex flex-col md:flex-row items-center w-full gap-10 py-12">
          <div className="w-full md:w-[55%]">
            <h1
              data-aos="zoom-out-down"
              className="text-2xl text-slate-800 font-bold pb-2"
            >
              Your Premier Destination for Residential Real Estate
            </h1>
            <p
              data-aos="zoom-out-down"
              className="text-slate-400 pb-2"
            >{`At SnowyNest, we understand that finding the perfect place to call home is more than just a transaction; it's about finding sanctuary, comfort, and belonging. Nestled within the digital landscape, SnowyNest emerges as your trusted ally in navigating the intricate world of residential real estate. Whether you're seeking to buy, sell, or invest in properties, our platform offers a seamless journey, tailored to your unique needs and aspirations.`}</p>
            <h1
              data-aos="zoom-out-down"
              className="text-2xl text-slate-800 font-bold pb-2"
            >
              Crafting Dreams into Realty
            </h1>
            <p
              data-aos="zoom-out-down"
              className="text-slate-400 pb-2"
            >{`SnowyNest isn't just another real estate platform; it's a sanctuary where dreams take shape. With a deep-rooted commitment to excellence, integrity, and personalized service, we endeavor to transform your aspirations into tangible realities. Our team of seasoned professionals brings a wealth of experience and expertise to the table, ensuring that every transaction is executed with precision and care.`}</p>
            <h1
              data-aos="zoom-out-down"
              className="text-2xl text-slate-800 font-bold pb-2"
            >
              Unraveling Boundless Opportunities
            </h1>
            <p
              data-aos="zoom-out-down"
              className="text-slate-400 pb-2"
            >{`In the ever-evolving realm of real estate, opportunities abound for those with the foresight to seize them. Whether you're a first-time buyer, a seasoned investor, or a homeowner looking to make a change, SnowyNest provides a gateway to endless possibilities. With an extensive portfolio of properties spanning diverse locations, styles, and price points, we empower you to explore, evaluate, and embark on your next adventure with confidence.`}</p>
          </div>
          <div
            data-aos="zoom-out-down"
            className="w-full md:w-[45%] h-[500px] rounded-2xl"
            style={{
              backgroundImage: `url(${image2})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }}
          ></div>
        </div>
      </div>
      <div>
        <div className="my-12 py-8 shadow-md bg-white">
          <div className="w-11/12 mx-auto">
            <ClaintReview />
          </div>
          <OurValue />
        </div>
        <div>
          <MarqueeImg />
        </div>
      </div>
    </div>
  );
};

export default About;
