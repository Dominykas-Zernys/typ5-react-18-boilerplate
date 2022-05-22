import { useState } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import NotLoggedIn from './components/NotLoggedIn';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import VipPage from './pages/VipPage';
import AuthContext from './store/authContext';

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function login() {
    setIsUserLoggedIn(true);
  }
  function logout() {
    setIsUserLoggedIn(false);
  }

  const contextValue = { isUserLoggedIn, login, logout };

  return (
    <AuthContext.Provider value={contextValue}>
      <div className='App'>
        <Header />
        <Switch>
          <ProtectedRoute path='/' exact>
            <h1>Home</h1>
          </ProtectedRoute>
          <Route path={'/login'}>
            <LoginPage />
          </Route>
          <ProtectedRoute path='/vip'>
            <VipPage />
          </ProtectedRoute>
          <Route path={'*'}>
            <h2>Page not found</h2>
          </Route>
        </Switch>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
