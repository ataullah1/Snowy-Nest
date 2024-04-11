import { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import { ContextAuth } from '../../provider/Provider';
import Loding from '../Loding/Loding';
import MainSection from '../../components/MainSection/MainSection';

const Home = () => {
  const { isLoading } = useContext(ContextAuth);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <Banner />
      <div>
        <MainSection />
      </div>
    </div>
  );
};

export default Home;
