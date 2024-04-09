import { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import { ContextAuth } from '../../provider/Provider';
import Loding from '../Loding/Loding';

const Home = () => {
  const { isLoading } = useContext(ContextAuth);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
