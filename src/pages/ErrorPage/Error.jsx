import { Link } from 'react-router-dom';
import errImg from '../../assets/error.png';
const Error = () => {
  return (
    <div className="bg-[#F7F7F7] min-h-screen w-full relative flex justify-center items-center">
      <div className="flex flex-col md:flex-row gap-5 w-11/12 mx-auto justify-center items-center mb-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-[#484848] font-bold text-5xl pb-4">
            Ohh! Page Not Found
          </h1>
          <p>We can’t seem to find the page you’re looking for</p>
        </div>
        <div className="w-full md:w-1/2">
          <img className="max-w-full max-h-96 md:mx-auto" src={errImg} alt="" />{' '}
        </div>
      </div>
      <div className="w-full flex justify-center absolute bottom-10 left-0 right-0">
        <Link
          to={'/'}
          className="py-3 text-white font-bold hover:bg-transparent border-2 border-redLi hover:text-redLi duration-150 mx-auto px-8 bg-redLi rounded-md"
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
