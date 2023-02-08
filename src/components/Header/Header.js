import { Link } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };
  return (
    <nav className="navbar" role="navigation">
      <div className="site-title">
        <h1>What&apos;s Updog?</h1>
      </div>
      <div className="links">
        {!user && (
          <div className="sign-in-up-links">
            <Link className="link" to="/auth/sign-in">
              Sign In
            </Link>
            <Link className="link" to="/auth/sign-up">
              Sign Up
            </Link>
          </div>
        )}
        {user && (
          <div className="signed-in">
            <h2 className="greeting">hello {user.email}</h2>
            <button className="sign-out-button" onClick={handleLogout}>
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
