import Contact from '../ContactUs/Contact';
import OfficeMap from '../OfficeMap/OfficeMap';
import OurValue from '../OurValue/OurValue';
import Propertices from '../Propertices/Propertices';

const MainSection = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <Propertices />
      <OurValue />
      <Contact />
      <OfficeMap />
    </div>
  );
};

export default MainSection;
