import image1 from '../../assets/sliderImg/14.jpg';
import profilePic from '../../assets/userProfile.png';

const Profile = () => {
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
      <div className="min-h-[500px] lg:min-w-[700px] left-1/2 -translate-x-1/2 top-52 bg-slate-50 border-4 border-redLi rounded-2xl absolute z-50">
        <div>
          <div className="bg-redLi h-24 w-24 mx-auto flex items-center justify-center rounded-b-xl">
            <img src={profilePic} className="w-20 h-20 rounded-full" alt="" />
          </div>
          <h1 className="text-center text-2xl font-semibold ">Md Ataullah</h1>
          <p className="text-center text-sm">ataullahm100@gmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
