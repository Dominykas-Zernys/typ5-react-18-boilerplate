import { useContext } from 'react';
import { Route } from 'react-router-dom';
import NotLoggedIn from './NotLoggedIn';
import AuthContext from '../store/authContext';

const ProtectedRoute = ({ children, ...rest }) => {
  const { isUserLoggedIn } = useContext(AuthContext);

  return <Route {...rest}>{isUserLoggedIn ? children : <NotLoggedIn />}</Route>;
};

export default ProtectedRoute;
