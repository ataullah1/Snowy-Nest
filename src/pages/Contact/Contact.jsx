import image1 from '../../assets/sliderImg/8.jpg';
import { Link } from 'react-router-dom';
import ContactSec from '../../components/ContactSec/ContactSec';
import OfficeMap from '../../components/OfficeMap/OfficeMap';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Helmet } from 'react-helmet';

const Contact = () => {
  return (
    <div className="bg-[#F7F7F7]">
      <Helmet>
        <title>Contact | SnowyNest</title>
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
                <Link to={'/Contact'}> Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-12">
          <ContactSec />
          <div className="w-11/12 mx-auto">
            <ContactForm />
          </div>
        </div>
        <OfficeMap />
      </div>
    </div>
  );
};

export default Contact;
