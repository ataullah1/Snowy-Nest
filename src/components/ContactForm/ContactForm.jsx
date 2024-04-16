import { useForm } from 'react-hook-form';
import { BsSendFill } from 'react-icons/bs';
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from 'react-icons/fa';

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
  return (
    <div className="bg-white p-8 rounded-3xl border-2 mt-14 gap-10 flex flex-col md:flex-row">
      <div className="w-full md:w-2/5 relative">
        <h1 data-aos="fade-right" className="text-4xl font-bold">
          Send Us An Email
        </h1>
        <p
          data-aos="fade-down-right"
          className="text-slate-400 pt-2 text-justify"
        >
          Have questions or interested in a property? Reach out to us at{' '}
          <span className="text-redLi cursor-pointer">info@snowynest.com</span>.
          Our team is here to help with any inquiries or assistance you may need
          regarding buying or selling your home.
        </p>
        <div
          data-aos="fade-down"
          className="md:absolute md:bottom-2 md:left-1/2 md:-translate-x-1/2 text-center"
        >
          <h1 className="text-2xl font-bold pt-8 pb-3 underline">Follow Us</h1>
          <div className="flex flex-row gap-4 text-2xl text-slate-600 justify-center">
            <a
              href="#"
              className="hover:text-redLi hover:scale-125 duration-150"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-redLi hover:scale-125 duration-150"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-redLi hover:scale-125 duration-150"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-redLi hover:scale-125 duration-150"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="hover:text-redLi hover:scale-125 duration-150"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" className="w-full md:w-3/5">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            className="px-4 py-2 outline-none border rounded-md"
            type="text"
            placeholder="Your name"
            {...register('Your name', { required: true, maxLength: 80 })}
          />
          <input
            className="px-4 py-2 outline-none border rounded-md"
            type="text"
            placeholder="Your Email"
            {...register('Your Email', {
              required: true,
              pattern: /^\S+@\S+$/i,
            })}
          />
          <input
            className="px-4 py-2 outline-none border rounded-md"
            type="tel"
            placeholder="Mobile number"
            {...register('Mobile number', {
              required: true,
              minLength: 6,
              maxLength: 12,
            })}
          />
          <input
            className="px-4 py-2 outline-none border rounded-md"
            type="text"
            placeholder="Subject"
            {...register}
          />
          <textarea
            className="px-4 py-2 outline-none border rounded-md h-36"
            placeholder="Your Message"
            {...register('Your Message', { min: 10 })}
          />
          <button className="py-2 px-2 bg-redLi rounded-md font-semibold text-white cursor-pointer active:scale-95 hover:bg-transparent border-2 border-redLi hover:text-redLi duration-150 flex items-center justify-center gap-2">
            Send <BsSendFill />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
