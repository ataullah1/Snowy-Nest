import Nav from '../../components/Nav/Nav';
import { useContext, useEffect, useState } from 'react';
import {
  FaEye,
  FaEyeSlash,
  FaFacebook,
  FaImage,
  FaTwitter,
  FaUserAlt,
} from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { TbPasswordFingerprint } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import image1 from '../../assets/sliderImg/8.jpg';

const Register = () => {
  const [eye, setEye] = useState(false);
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidPass = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
  const [emailErr, setEmailErr] = useState(null);
  const [passErr, setPassErr] = useState(null);
  const [confPassErr, setConfPassErr] = useState(null);
  const [loginErr, setLoginErr] = useState(false);

  const {
    logout,
    loding,
    emailPass,
    // namePhotoURL,
    twitterLogin,
    fbLogin,
    googleLogin,
    userDta,
  } = useContext(ContextAuth);
  // Naviget, login done then go to Home
  const naviget = useNavigate();
  useEffect(() => {
    if (userDta) {
      naviget('/');
    }
  }, [userDta, naviget]);

  const [imgNam, setImgNam] = useState({});
  const handleSignUpSubmit = (e) => {
    setEmailErr(null);
    setPassErr(null);
    setConfPassErr(null);
    e.preventDefault();
    const formDta = new FormData(e.currentTarget);
    const name = formDta.get('name');
    const photo = formDta.get('img');
    setImgNam({ nam: name, pic: photo });
    const email = formDta.get('email');
    const pass = formDta.get('password');
    const confPass = formDta.get('confirmPass');
    // console.log(name, photo, email, pass, confPass);

    if (!isValidEmail.test(email)) {
      setEmailErr('Please enter a valid email address.');
      return;
    } else if (!isValidPass.test(pass)) {
      setPassErr('Please input Uppercase, Number and at least 6 digits.');
      return;
    } else if (pass !== confPass) {
      setConfPassErr('Password is not matched.');
      return;
    } else {
      console.log('Good Password');
    }
  };

  const socialLogin = (anda) => {
    console.log(anda);
  };

  return (
    <div>
      <div className="bg-slate-600">
        <Nav />
      </div>
      <div className="flex items-center justify-center min-h-[calc(100vh-92px)]">
        <div className="flex flex-col md:flex-row-reverse items-center w-full gap-5 border-2 rounded-lg border-secondary min-h-[450px] md:p-10 mt-8">
          <div className="w-full md:w-1/2 h-[300px] md:h-[450px] flex justify-center items-center">
            <img src={image1} alt="" className="max-h-full mx-auto" />
          </div>
          <div className="w-full md:w-1/2 mx-auto border-2 rounded-lg p-5">
            <h1 className="text-3xl font-bold pb-6">Create an account</h1>
            <form className="space-y-4" onSubmit={handleSignUpSubmit}>
              <label className="input input-bordered flex items-center gap-2">
                <FaUserAlt />
                <input
                  type="text"
                  name="name"
                  className="grow"
                  placeholder="Your Name"
                />
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <FaImage />
                <input
                  type="text"
                  className="grow"
                  name="img"
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
                    {eye ? <FaEyeSlash /> : <FaEye />}
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
                className="w-full py-2 px-4 rounded-md text-center text-white font-bold bg-secondary active:scale-95 duration-150 cursor-pointer hover:bg-[#bb019c]"
              />
            </form>{' '}
            <p className="pt-2">
              Already have an account?{' '}
              <Link to={'/login'} className="underline">
                Login
              </Link>
            </p>
            <div className="divider divider-secondary">Or</div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => socialLogin('handleGoogleLogin')}
                className="py-2 px-4 w-full font-medium border-y hover:shadow-lg shadow-indigo-900/20 rounded-md flex items-center justify-center gap-2 bg-white"
              >
                <span>
                  <FcGoogle />
                </span>
                Login With Google
              </button>
              <button
                onClick={() => socialLogin('handleGithuLogin')}
                className="py-2 px-4 w-full font-medium border-y hover:shadow-lg shadow-blue-500/20 rounded-md  flex items-center justify-center gap-2"
              >
                <span className="text-blue-500">
                  <FaFacebook />
                </span>
                Login With GitHub
              </button>
              <button
                onClick={() => socialLogin('handleTwitterLogin')}
                className="py-2 px-4 w-full font-medium border-y hover:shadow-lg shadow-blue-400-900/20 rounded-md  flex items-center justify-center gap-2"
              >
                <span className="text-blue-400">
                  <FaTwitter />
                </span>
                Login With Twitter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
