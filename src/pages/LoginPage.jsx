import { useContext } from 'react';
import AuthContext from '../store/authContext';
import Container from '../UI/Container';

const LoginPage = () => {
  const authCtxt = useContext(AuthContext);

  function formHandler(e) {
    e.preventDefault();
    console.log('logging in');
    authCtxt.login();
  }

  return (
    <Container>
      <h1>Login</h1>
      <form onSubmit={formHandler}>
        <input type='text' placeholder='email' />
        <br />
        <input type='text' placeholder='password' />
        <br />
        <button type='submit'>Login</button>
      </form>
    </Container>
  );
};

export default LoginPage;
