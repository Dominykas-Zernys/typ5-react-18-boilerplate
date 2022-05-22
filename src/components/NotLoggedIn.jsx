import { Link } from 'react-router-dom';

const NotLoggedIn = () => {
  return (
    <>
      <h2>You are not logged in</h2>
      <p>
        Please <Link to={'/login'}>login</Link> to see the content
      </p>
    </>
  );
};

export default NotLoggedIn;
