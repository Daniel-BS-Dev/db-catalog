import {
  getTokenData,
  isAuthenticated,
  removeToken,
  TokenData,
} from 'util/request';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import 'bootstrap/js/src/collapse.js';
import history from 'util/history';
import './styles.scss';

type Authenticated = {
  isAuthenticated: boolean;
  token?: TokenData;
};

const NavBar = () => {
  const [authData, setAuthData] = useState<Authenticated>({
    isAuthenticated: false,
  });

  useEffect(() => {
    if (isAuthenticated()) {
      setAuthData({
        isAuthenticated: true,
        token: getTokenData(),
      });
    } else {
      setAuthData({
        isAuthenticated: false,
      });
    }
  }, []);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    removeToken();
    setAuthData({
      isAuthenticated: false,
    });

    history.replace('/');
  }

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary nav-container">
      <div className="container-fluid">
        <Link to="/" className="nav-logo-text">
          <h4>DB CATALOG</h4>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#dscatalog-navbar"
          aria-controls="dscatalog-navbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="nav-container-link collapse navbar-collapse"
          id="dscatalog-navbar"
        >
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'active' : 'inactive')}
              >
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/products">Catálogo</NavLink>
            </li>
            <li>
              <NavLink to="/admin">ADMIN</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-login-logout">
          {authData.isAuthenticated ? (
            <>
              <span>{authData.token?.user_name}</span>
              <Link className="nav-logout" to="/" onClick={handleClick}>
                Logout
              </Link>
            </>
          ) : (
            <Link className="nav-login" to="/admin/auth">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
