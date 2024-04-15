import ContactSec from '../ContactSec/ContactSec';
import OfficeMap from '../OfficeMap/OfficeMap';
import OurValue from '../OurValue/OurValue';
import Propertices from '../Propertices/Propertices';

const MainSection = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <Propertices />
      <OurValue />
      <div className="mt-32">
        <ContactSec />
      </div>
      <OfficeMap />
    </div>
  );
};

export default MainSection;
