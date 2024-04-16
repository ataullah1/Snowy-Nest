import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import image1 from '../../assets/sliderImg/1.jpg';

const PrivecyPolicy = () => {
  return (
    <div className="">
      <Helmet>
        <title>Privecy Policy | SnowyNest</title>
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
                <Link to={'/privecy-policy'}> Privecy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="privacy-policy w-11/12 mx-auto max-w-[1700px] my-16">
        <h1 className="text-3xl pt-4 font-bold ">Privacy Policy</h1>
        <p>
          At SnowyNest, we are committed to protecting your privacy. This
          Privacy Policy outlines how your personal information is collected,
          used, and protected when you visit our website.
        </p>
        <h2 className="text-2xl pt-4 font-bold ">Information We Collect</h2>
        <p>
          We collect information when you register on our site, place an order,
          subscribe to our newsletter, respond to a survey, or fill out a form.
          This information may include your name, email address, mailing
          address, phone number, or credit card information.
        </p>
        <h2 className="text-2xl pt-4 font-bold ">
          How We Use Your Information
        </h2>
        <p>
          We may use the information we collect from you to personalize your
          experience, improve our website, process transactions, send periodic
          emails, or administer a promotion, survey, or other site feature.
        </p>
        <h2 className="text-2xl pt-4 font-bold ">Third-Party Disclosure</h2>
        <p>
          We do not sell, trade, or otherwise transfer your personal information
          to outside parties without your consent.
        </p>
        <h2 className="text-2xl pt-4 font-bold ">Security</h2>
        <p>
          We implement a variety of security measures to maintain the safety of
          your personal information when you place an order or enter, submit, or
          access your information.
        </p>
        <h2 className="text-2xl pt-4 font-bold ">
          Changes to This Privacy Policy
        </h2>
        <p>
          SnowyNest reserves the right to update or change our Privacy Policy at
          any time. Any changes will be posted on this page.
        </p>
        <h2 className="text-2xl pt-4 font-bold ">Contact Us</h2>
        <p>
          If you have any questions about our Privacy Policy, please contact us
          at privacy@snowynest.com.
        </p>
      </div>
    </div>
  );
};

export default PrivecyPolicy;
