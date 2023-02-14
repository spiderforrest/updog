import { useRef } from 'react';
import { useState } from 'react';
import { useUser } from '../../context/UserContext.js';
import { useOnClickOutside } from '../../hooks.js';
import { signOut } from '../../services/auth.js';
import Burger from '../Burger/Burger.js';
import Menu from '../Menu/Menu.js';
import './Header.css';

export default function Header() {
  const { user, setUser } = useUser();
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

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
        <h1>Updog</h1>
      </div>
      <div className="links">
        {!user && (
          <div ref={node}>
            <Burger open={open} setOpen={setOpen} />
            <Menu open={open} setOpen={setOpen} />
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
