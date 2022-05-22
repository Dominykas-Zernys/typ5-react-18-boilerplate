import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../store/authContext';

const Header = () => {
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  function logoutHandler(e) {
    logout();
  }

  return (
    <header className='header'>
      <h2>System</h2>
      <nav className='main-nav'>
        {isUserLoggedIn && <NavLink to={'/'}>Home</NavLink>}
        {isUserLoggedIn && <NavLink to={'/vip'}>VIP</NavLink>}
        {!isUserLoggedIn && <NavLink to={'/login'}>Login</NavLink>}
        {isUserLoggedIn && (
          <NavLink onClick={logoutHandler} to={'/login'}>
            Logout
          </NavLink>
        )}
      </nav>
    </header>
  );
};

export default Header;
