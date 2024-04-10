import { useContext } from 'react';
import Banner from '../../components/Banner/Banner';
import { ContextAuth } from '../../provider/Provider';
import Loding from '../Loding/Loding';
import Propertices from '../../components/Propertices/Propertices';

const Home = () => {
  const { isLoading } = useContext(ContextAuth);
  if (isLoading) {
    return <Loding />;
  }
  return (
    <div>
      <Banner />
      <div>
        <Propertices />
      </div>
    </div>
  );
};

export default Home;
