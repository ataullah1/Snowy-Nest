import { FaEdit } from 'react-icons/fa';
import image1 from '../../assets/sliderImg/14.jpg';
import profilePic from '../../assets/userProfile.png';
import { IoMdContact } from 'react-icons/io';
import { useState } from 'react';
import { MdSave } from 'react-icons/md';

const Profile = () => {
  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [update, setUpdate] = useState(false);
  const [nameErr, setNameErr] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const profileUpdate = () => {
    setEmailErr('');
    setNameErr('');
    const name = document.getElementById('nameInp').value;
    const email = document.getElementById('emailInp').value;
    if (name.length > 2 && isValidEmail.test(email)) {
      setUpdate(!update);
    } else if (name.length < 2) {
      setNameErr('Enter your valid name!');
    } else if (!isValidEmail.test(email)) {
      setEmailErr('Enter a valid email address!');
    }
    // console.log(name, email);
  };

  return (
    <div className="relative min-h-screen">
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
      <div className="min-h-[500px] py-5 w-11/12 sm:w-10/12 lg:w-[700px] left-1/2 -translate-x-1/2 top-52 bg-slate-50 border-4 border-redLi rounded-2xl absolute z-50">
        <div>
          <div className=" h-[95px] w-[96px] mx-auto rounded-full bg-gradient-to-r from-fuchsia-600 to-purple-600 p-1">
            <div className="w-full h-full bg-fuchsia-50 rounded-full p-1">
              <img
                src={profilePic}
                className="w-full h-full rounded-full"
                alt=""
              />
            </div>
          </div>
          <h1 className="text-center text-2xl font-semibold ">Md Ataullah</h1>
          <p className="text-center text-sm underline">
            ataullahm100@gmail.com
          </p>
          <div className="divider before:bg-redLi after:bg-redLi divider-secondary w-full text-lg">
            Profile details
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
                    />{' '}
                    {nameErr && (
                      <p className="text-red-500 italic text-sm">{nameErr}</p>
                    )}
                  </div>
                ) : (
                  <p>Md Ataullah</p>
                )}
              </div>
              <div>
                <p className="text-base font-semibold text-slate-500">Email</p>
                {update ? (
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      id="emailInp"
                      className="border-2 border-redLi rounded-md py-1 px-2"
                    />
                    {emailErr && (
                      <p className="text-red-500 italic text-sm">{emailErr}</p>
                    )}
                  </div>
                ) : (
                  <p>ataullahm100@gmail.com</p>
                )}
              </div>
              <div>
                <p className="text-base font-semibold text-slate-500">Phone</p>
                <p>01719-199967</p>
              </div>
              <div>
                <p className="text-base font-semibold text-slate-500">
                  Address
                </p>
                <p>Bangladesh</p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-12">
              <button className="py-2 bg-redLi text-white hover:-skew-x-[15deg] duration-150 border-redLi border-2 rounded-md px-4">
                Delete Profile
              </button>

              <div>
                {update ? (
                  <div>
                    <button
                      onClick={(() => setUpdate(!update), profileUpdate)}
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
                    <FaEdit /> Edit Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
