import { useContext, useState } from 'react';
import { FaEye, FaEyeSlash, FaTwitter } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import image1 from '../../assets/sliderImg/6.jpg';
import Nav from '../../components/Nav/Nav';
import { FaGithub } from 'react-icons/fa';
import { ContextAuth } from '../../provider/Provider';
const Login = () => {
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [emailErr, setEmailErr] = useState(null);

  const { twitterLogin, gitHubLogin, googleLogin, emlPassLogin } =
    useContext(ContextAuth);

  const handleLoginSubmit = (e) => {
    setEmailErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const email = formDta.get('email');
    const pass = formDta.get('password');
    console.log(email, pass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    }
    // Email password Login
    emlPassLogin(email, pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <div>
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
            <div className="bg-transparent absolute w-full z-50">
              <Nav />
            </div>
          </div>
          <div className="h-full w-full absolute top-[40%] left-1/2 -translate-x-1/2 text-3xl font-bold z-10 text-white">
            <div>
              <Link to={'/'}>Home /</Link>
              <Link to={'/login'}> Login</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 md:max-w-[720px] mx-auto rounded-lg p-5">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-redLi inline-block pr-3">
          Login Your Account
        </h1>
        <form className="space-y-6" onSubmit={handleLoginSubmit}>
          <div>
            <label
              className={
                emailErr
                  ? 'input input-bordered flex items-center gap-2 border-red-500'
                  : 'input input-bordered flex items-center gap-2'
              }
            >
              <MdEmail />
              <input
                type="email"
                name="email"
                className="grow"
                placeholder="Email"
              />
            </label>
            {emailErr && (
              <p className="text-sm text-red-500 italic">{emailErr}</p>
            )}
          </div>
          <label className="relative input input-bordered flex items-center gap-2">
            <RiLockPasswordFill />
            <input
              type={eye ? 'text' : 'password'}
              className="grow"
              name="password"
              required
              placeholder="Password"
            />
            <div
              onClick={() => setEye(!eye)}
              className="cursor-pointer text-xl absolute right-3"
            >
              {eye ? <FaEye /> : <FaEyeSlash />}
            </div>
          </label>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <input
                type="checkbox"
                className="cursor-pointer form-checkbox text-redLi focus:ring-redLi h-4 w-4"
              />{' '}
              <label>Remember me</label>
            </div>

            <p className="underline cursor-pointer">Forgot Password</p>
          </div>
          <input
            type="submit"
            value="Login"
            className="w-full py-2 px-4 rounded-md text-center text-white hover:text-redLi font-bold bg-redLi active:scale-95 duration-150 cursor-pointer hover:bg-transparent border-2 border-redLi"
          />
        </form>{' '}
        <p className="pt-3">
          {`Don't have an account? `}
          <Link to={'/register'} className="underline text-redLi">
            Create Account
          </Link>
        </p>
        <div className="divider before:bg-redLi after:bg-redLi divider-secondary">
          Or
        </div>
        <div className="flex flex-col md:flex-row gap-3">
          <button
            onClick={() => socialLogin(googleLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-2 border-redLi"
          >
            <span className=" text-2xl">
              <FcGoogle />
            </span>
            Login With Google
          </button>
          <button
            onClick={() => socialLogin(gitHubLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-2 border-redLi"
          >
            <span className="text-black text-2xl">
              <FaGithub />
            </span>
            Login With GitHub
          </button>
          <button
            onClick={() => socialLogin(twitterLogin)}
            className="py-2 px-4 w-full font-medium border hover:shadow-lg shadow-blue-400-900/20 rounded-md  flex items-center justify-center gap-2 border-redLi"
          >
            <span className="text-blue-400 text-2xl">
              <FaTwitter />
            </span>
            Login With Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
