import ContactForm from '../ContactForm/ContactForm';
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
        <div className="w-11/12 mx-auto mt-20">
          <ContactForm />
        </div>
      </div>
      <OfficeMap />
    </div>
  );
};

export default MainSection;
