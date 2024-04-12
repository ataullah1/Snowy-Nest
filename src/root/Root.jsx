import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import { useContext, useEffect, useState } from 'react';
import { ContextAuth } from '../provider/Provider';
import Loding from '../pages/Loding/Loding';

const Root = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { isLoading } = useContext(ContextAuth);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <div
        className={
          scrolled
            ? 'fixed top-0 left-0 right-0 bg-[#c0c0c0b5] z-50 max-w-[1500px] mx-auto'
            : 'bg-transparent fixed top-0 left-0 right-0 z-50 max-w-[1500px] mx-auto'
        }
      >
        <Nav />
        {/* <h1 className="fixed top-0 left-0 z-50 bg-transparent text-white text-center text-6xl w-full">
          baler mata
        </h1> */}
      </div>
      <div className="max-w-[1700px] mx-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
