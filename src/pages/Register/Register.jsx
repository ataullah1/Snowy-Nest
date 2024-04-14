import {
  FaEye,
  FaEyeSlash,
  FaGithub,
  FaImage,
  FaTwitter,
  FaUserAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TbPasswordFingerprint } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import image1 from '../../assets/sliderImg/login.jpg';
import { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../../provider/Provider';
import { useNavigate } from 'react-router-dom';
import Loding from '../Loding/Loding';
import Swal from 'sweetalert2';

const Register = () => {
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidPass = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);
  const [confPassErr, setConfPassErr] = useState(null);

  // Firebase data
  const {
    emlPassRegister,
    twitterLogin,
    gitHubLogin,
    googleLogin,
    isLoading,
    logOutAcc,
    userDta,
    profileUpdate,
    setReload,
    reload,
    setIsLoading,
    setRegisterDta,
  } = useContext(ContextAuth);

  // Naviget, login done then go to Login
  const naviget = useNavigate();
  useEffect(() => {
    if (userDta) {
      naviget('/');
      console.log('Register to home');
    }
  }, [userDta, naviget]);

  // const [imgNam, setImgNam] = useState({});
  const handleSignUpSubmit = (e) => {
    setEmailErr(null);
    setPassErr(null);
    setConfPassErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const name = formDta.get('name');
    const photo = formDta.get('img');
    // setImgNam({ nam: name, pic: photo });
    const email = formDta.get('email');
    const pass = formDta.get('password');
    const confPass = formDta.get('confirmPass');
    // console.log(name, photo, imgNam, email, pass, confPass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (!isValidPass.test(pass)) {
      setPassErr('Please input Uppercase, Lowercase and at least 6 digits.');
      return;
    } else if (pass !== confPass) {
      setConfPassErr('Password is not matched.');
      return;
    }
    // Email password Register
    emlPassRegister(email, pass)
      .then(() => {
        // Update Profile
        profileUpdate(name, photo)
          .then(() => {
            Swal.fire({
              title: 'Good job!',
              text: 'Your account has been successfully created. Please login now.',
              icon: 'success',
            });
          })
          .catch((err) => {
            console.log(err);
          });
        logOutAcc();
        setReload(!reload);
        setRegisterDta(false);

        naviget('/login');
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        setIsLoading(false);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be Created !',
          icon: 'error',
        });
      });
  };

  // all Social Login
  const socialLogin = (socialLogin) => {
    socialLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: 'Good job!',
          text: 'Your account has been successfully logged in.',
          icon: 'success',
        });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your account could not be logged in!',
          icon: 'error',
        });
      });
  };
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <div>
        <div
          className="h-72 overflow-hidden bg-cover bg-no-repeat p-12 text-center"
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
            <div className="h-full w-full absolute top-[40%] left-1/2 -translate-x-1/2 text-3xl font-bold z-10 text-white">
              <div>
                <Link to={'/'}>Home /</Link>
                <Link to={'/register'}> Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-2 md:max-w-[720px] mx-auto rounded-lg p-5">
        <h1 className="text-3xl font-bold mb-6 border-b-2 border-redLi inline-block pr-3">
          Create an account
        </h1>
        <form className="space-y-4" onSubmit={handleSignUpSubmit}>
          <label className="input input-bordered flex items-center gap-2">
            <FaUserAlt />
            <input
              type="text"
              name="name"
              className="grow"
              required
              placeholder="Your Name"
            />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <FaImage />
            <input
              type="text"
              className="grow"
              name="img"
              required
              placeholder="Your Image URL"
            />
          </label>
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
          <div>
            <label
              className={
                passErr
                  ? 'relative input input-bordered flex items-center gap-2 border-red-500'
                  : 'relative input input-bordered flex items-center gap-2'
              }
            >
              <RiLockPasswordFill />
              <input
                type={eye ? 'text' : 'password'}
                name="password"
                className="grow"
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
            {passErr && (
              <p className="text-sm text-red-500 italic">{passErr}</p>
            )}
          </div>
          <div>
            <label
              className={
                confPassErr
                  ? 'input input-bordered flex items-center gap-2 border-red-500'
                  : 'input input-bordered flex items-center gap-2'
              }
            >
              <TbPasswordFingerprint />
              <input
                type="password"
                className="grow"
                name="confirmPass"
                placeholder="Confirm Password"
              />
            </label>
            {confPassErr && (
              <p className="text-sm text-red-500 italic">{confPassErr}</p>
            )}
          </div>

          <input
            // onClick={handeleNameImg}
            type="submit"
            value="Register"
            className="w-full py-2 px-4 rounded-md text-center text-white hover:text-redLi font-bold bg-redLi active:scale-95 duration-150 cursor-pointer hover:bg-transparent border-2 border-redLi"
          />
        </form>{' '}
        <p className="pt-2">
          Already have an account?{' '}
          <Link to={'/login'} className="underline text-redLi">
            Login
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

export default Register;
