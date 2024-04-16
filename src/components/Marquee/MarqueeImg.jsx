import Marquee from 'react-fast-marquee';
import img1 from '../../assets/marquee/1.png';
import img2 from '../../assets/marquee/2.png';
import img3 from '../../assets/marquee/3.png';
import img4 from '../../assets/marquee/4.png';
import img5 from '../../assets/marquee/5.png';
import img6 from '../../assets/marquee/brand-1.png';
import img7 from '../../assets/marquee/brand-2.png';
import img8 from '../../assets/marquee/brand-3.png';
import img9 from '../../assets/marquee/brand-5.png';

const MarqueeImg = () => {
  return (
    <div className="py-5">
      <div className="text-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="400"
          data-aos-anchor-placement="center-bottom"
          className="text-4xl font-bold"
        >
          Our Partners
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="450"
          data-aos-anchor-placement="center-bottom"
          className="text-slate-400 pt-2 pb-8 px-3"
        >
          We only work with the best companies around the globe
        </p>
      </div>
      <Marquee>
        <div className="flex flex-row gap-32">
          <img className="h-16" src={img1} alt="" />
          <img className="h-16" src={img2} alt="" />
          <img className="h-16" src={img3} alt="" />
          <img className="h-16" src={img4} alt="" />
          <img className="h-16" src={img5} alt="" />
          <img className="h-16" src={img6} alt="" />
          <img className="h-16" src={img7} alt="" />
          <img className="h-16" src={img8} alt="" />
          <img className="h-16" src={img9} alt="" />
          <div className=" w-6"></div>
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeImg;
