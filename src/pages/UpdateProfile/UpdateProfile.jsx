import { FaEdit } from 'react-icons/fa';
import image1 from '../../assets/sliderImg/14.jpg';
import profilePic from '../../assets/userProfile.png';
import { IoMdContact } from 'react-icons/io';
import { useContext, useEffect, useState } from 'react';
import { MdSave } from 'react-icons/md';
import { ContextAuth } from '../../provider/Provider';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';

const UpdateProfile = () => {
  const { userDta, profileUpdate, setReload, reload } = useContext(ContextAuth);
  const [update, setUpdate] = useState(false);
  const [nameErr, setNameErr] = useState('');
  // const [emailErr, setEmailErr] = useState('');
  const [photoErr, setPhotoErr] = useState('');

  const handleUpdate = () => {
    setPhotoErr('');
    setNameErr('');
    // setEmailErr('');
    const name = document.getElementById('nameInp').value;
    // const email = document.getElementById('emailInp').value;
    const photo = document.getElementById('imgUrl').value;
    if (name.length > 2 && photo.length > 5) {
      setUpdate(!update);
    } else if (photo.length < 5) {
      setPhotoErr('Enter your valid new photo URL');
      return;
    } else if (name.length < 2) {
      setNameErr('Enter your valid new name');
      return;
    }
    profileUpdate(name, photo)
      .then(() => {
        setReload(!reload);
        Swal.fire({
          title: 'Good job!',
          text: 'Your profile has been successfully updated.',
          icon: 'success',
        });
      })
      .catch((err) => {
        Swal.fire({
          title: 'Oops...!',
          text: 'Sorry, your profile could not be updated !',
          icon: 'error',
        });
        console.log(err.message);
      });
  };

  // Naviget, if not login then go to Home
  const naviget = useNavigate();
  useEffect(() => {
    if (!userDta) {
      naviget('/');
    }
  }, [naviget, userDta]);
  return (
    <div className="relative min-h-screen">
      <Helmet>
        <title>Profile | SnowyNest</title>
      </Helmet>
      <div
        className="min-h-96 overflow-hidden bg-cover bg-no-repeat p-12 text-center relative"
        style={{
          backgroundImage: `url(${image1})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 min-h-96 w-full overflow-hidden bg-fixed"
          style={{ backgroundColor: ' rgba(0, 0, 0, 0.6)' }}
        ></div>
      </div>
      {userDta && (
        <div className="min-h-[500px] py-5 w-11/12 sm:w-10/12 lg:w-[700px] mx-auto bg-slate-50 border-4 border-redLi rounded-2xl -translate-y-44">
          <div>
            <div className=" h-[95px] w-[96px] mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 p-1">
              <div className="w-full h-full bg-fuchsia-50 rounded-full p-1">
                <img
                  src={userDta.photoURL ? userDta.photoURL : profilePic}
                  className="w-full h-full rounded-full"
                  alt=""
                />
              </div>
            </div>

            <h1 className="text-center text-2xl font-semibold ">
              {userDta.displayName ? userDta.displayName : 'User Name'}
            </h1>
            <p className="text-center text-sm underline">
              {userDta.email ? userDta.email : 'Email could not be accessed'}
            </p>
            <div className="divider before:bg-redLi after:bg-redLi divider-secondary w-full text-lg">
              Profile Update
            </div>

            <div className="w-11/12 sm:w-10/12 mx-auto">
              <div className="flex items-center justify-between">
                <h1 className="flex items-center gap-1 font-semibold text-lg underline">
                  <IoMdContact /> My Profile
                </h1>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                <div>
                  <p className="text-base font-semibold text-slate-500">
                    Full Name
                  </p>
                  {update ? (
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        id="nameInp"
                        className="border-2 border-redLi rounded-md py-1 px-2"
                      />
                      {nameErr && (
                        <p className="text-red-500 italic text-sm">{nameErr}</p>
                      )}
                    </div>
                  ) : (
                    <p>
                      {userDta.displayName ? userDta.displayName : 'User Name'}
                    </p>
                  )}
                </div>

                <div className="w-[500px] mx-auto">
                  <input
                    type="text"
                    id="imgUrl"
                    placeholder="Input your new photo URL"
                    className={
                      photoErr
                        ? 'border-2 border-redLi rounded-md py-1 px-3 mx-auto block mt-2 md:w-full placeholder-red-500'
                        : 'border-2 border-redLi rounded-md py-1 px-3 mx-auto block mt-2 md:w-full'
                    }
                  />
                  {photoErr && (
                    <p className="text-red-500 italic text-sm">{photoErr}</p>
                  )}
                </div>
              </div>
              <div className="flex items-center justify-between mt-12">
                <div>
                  {update ? (
                    <div>
                      <button
                        onClick={(() => setUpdate(!update), handleUpdate)}
                        className="bg-redLi text-white flex items-center gap-1 font-semibold text-lg cursor-pointer py-2 border-redLi border-2 hover:-skew-x-[15deg] duration-150 px-5 rounded-md"
                      >
                        <MdSave /> Save
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => setUpdate(!update)}
                      className="flex items-center gap-2 font-semibold text-lg cursor-pointer py-2 border-redLi border-2 hover:-skew-x-[15deg] duration-150 px-5 rounded-md"
                    >
                      <FaEdit /> Update Profile
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
