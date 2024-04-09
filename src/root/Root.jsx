import { Outlet } from 'react-router-dom';
// import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { useContext } from 'react';
import { ContextAuth } from '../provider/Provider';
import Loding from '../pages/Loding/Loding';

const Root = () => {
  const { isLoading } = useContext(ContextAuth);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      {/* <Nav /> */}
      <div className="max-w-[1500px]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
