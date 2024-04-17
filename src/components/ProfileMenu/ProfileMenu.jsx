import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextAuth } from '../../provider/Provider';
import userProfile from '../../assets/userProfile.png';
import { LuLogOut } from 'react-icons/lu';
const ProfileMenu = () => {
  const { userDta, logOutAcc } = useContext(ContextAuth);
  return (
    <div>
      <div className="border-2 bg-slate-500 text-white border-redLi rounded-md w-[300px] p-4">
        <div className="space-y-2">
          <img
            src={userDta.photoURL ? userDta.photoURL : userProfile}
            alt=""
            className="h-16 sm:h-20 w-16 sm:w-20 border-2 border-redLi p-[2px] rounded-full mx-auto"
          />
          <h2 className="text-2xl font-semibold text-center">
            {userDta.displayName ? userDta.displayName : 'User Name'}
          </h2>
          <div className="w-full text-center">
            <Link to={'profile'}>
              <button className="active:scale-90 border-2 border-redLi relative inline-flex items-center justify-start px-6 py-1.5 overflow-hidden font-medium transition-all bg-transparent rounded hover:bg-white group">
                <span className="w-48 h-48 rounded rotate-[-40deg] bg-white absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                <span className="relative w-full text-left text-white transition-colors duration-300 ease-in-out group-hover:text-redLi">
                  View Profile
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <ul className="flex flex-col gap-3 my-4">
            <Link
              className="block lg:hidden py-1.5 border rounded-md w-full px-3 hover:border-redLi duration-150"
              to={'/'}
            >
              Home
            </Link>
            <Link
              className="block lg:hidden py-1.5 border rounded-md w-full px-3 hover:border-redLi duration-150"
              to={'/about'}
            >
              About
            </Link>
            <Link
              className="block lg:hidden py-1.5 border rounded-md w-full px-3 hover:border-redLi duration-150"
              to={'/blog'}
            >
              Blog
            </Link>
            <Link
              className="block lg:hidden py-1.5 border rounded-md w-full px-3 hover:border-redLi duration-150"
              to={'/contact'}
            >
              Contact Us
            </Link>
            <Link
              to={'/update-profile'}
              className="py-1.5 border rounded-md w-full px-3 hover:border-redLi duration-150"
            >
              Update Profile
            </Link>
            <Link
              to={'/profile'}
              className="py-1.5 border rounded-md w-full px-3 hover:border-redLi duration-150"
            >
              Setting
            </Link>
            <Link
              to={'/privecy-policy'}
              className="py-1.5 border rounded-md w-full px-3 hover:border-redLi duration-150"
            >
              Privecy policy
            </Link>
          </ul>
          <button
            onClick={logOutAcc}
            className="relative group w-full py-1.5 px-4 border-2 font-bold tracking-widest active:scale-95 duration-150 hover:border-white  border-redLi rounded hover:border-b-redLi text-center"
          >
            <span className="absolute bottom-0 left-0 w-0 h-[3px] bg-redLi group-hover:w-full group-hover:transition-all"></span>
            <span className="flex items-center justify-center flex-row-reverse gap-2">
              <span className="rotate-180 font-bold text-2xl">
                <LuLogOut />
              </span>
              Log out
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;
