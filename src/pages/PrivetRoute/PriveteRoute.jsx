import { useContext } from 'react';
import { ContextAuth } from '../../provider/Provider';
import { Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const PriveteRoute = ({ children }) => {
  const { userDta } = useContext(ContextAuth);
  if (userDta) {
    return children;
  }
  return <Navigate to={'/login'} />;
};

export default PriveteRoute;

PriveteRoute.propTypes = {
  children: PropTypes.node,
};
