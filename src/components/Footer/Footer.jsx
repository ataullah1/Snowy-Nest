import { BsGithub, BsTwitterX, BsWhatsapp } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-[#8A99B3]">
      <div className=" bg-[#24324A]">
        <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-6 lg:grid-rows-1 gap-3 xl:gap-5 py-16">
          <div className="lg:col-span-2">
            <h1 className="font-bold text-2xl text-white pb-5">About Site</h1>
            <p>
              We’re reimagining how you buy, sell and rent. It’s now easier to
              get into a place you love. So let’s do this, together.
            </p>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl text-white pb-5">Quick Links</h1>
            <div className="flex flex-col gap-3">
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                About Us
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                Terms & Conditions
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                User’s Guide
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                Support Center
              </Link>
              <Link className="hover:text-white hover:translate-x-2 duration-200">
                Press Info
              </Link>
            </div>
          </div>
          <div className="">
            <h1 className="font-bold text-2xl text-white pb-5">Contact Us</h1>
            <div className="flex flex-col gap-3">
              <p>info@findhouse.com</p>
              <p>Collins Street West, Victoria 8007, Australia.</p>
              <p>+1 246-345-0699</p>
              <p>+1 246-345-0695</p>
            </div>
          </div>
          <div className="lg:col-span-2">
            <h1 className="font-bold text-2xl text-white pb-5">Follow us</h1>
            <div className="flex flex-row items-center gap-4 text-2xl">
              <a
                href="#"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <BsTwitterX />
              </a>
              <a
                href="#"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <BsGithub />
              </a>
              <a
                href="#"
                className="hover:scale-125 rounded-full p-1 hover:text-white duration-150"
              >
                <BsWhatsapp />
              </a>
            </div>
            <h1 className="font-semibold text-xl text-white pb-4 pt-10">
              Subscribe
            </h1>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full sm:w-2/3 py-3 outline-none rounded-l-full rounded-r-full sm:rounded-r-none bg-[#354765] px-5 text-white"
              />
              <button className="w-full sm:w-1/3 py-2 text-white border-redLi border-2 bg-transparent hover:bg-redLi sm:rounded-l-none rounded-l-full rounded-r-full active:scale-95 duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-[#1D293E]">
        <div className="w-11/12 mx-auto flex flex-col md:flex-row gap-3 text-center  justify-between py-6">
          <div className="flex gap-4 justify-center">
            <Link className="hover:text-white" to={'/'}>
              Home
            </Link>
            <Link className="hover:text-white" to={'/about'}>
              About
            </Link>
            <Link className="hover:text-white" to={'/contact'}>
              Contact
            </Link>
          </div>
          <p>
            Copyright © 2024 - All right reserved by{' '}
            <a
              href="https://www.facebook.com/ataullah0"
              className="text-pink-500 italic font-semibold tracking-wide hover:text-white"
            >
              Md Ataullah
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
