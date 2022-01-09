import {getTokenData, isAuthenticated, removeToken} from 'util/request';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useContext, useEffect} from 'react';
import { AuthContext } from 'AuthContext';
import './styles.scss';



const NavBar = () => {
 
  // criando estado para comunicação
  const { authContextData, setAuthContextData } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (isAuthenticated()) {
      setAuthContextData({
        isAuthenticated: true,
        token: getTokenData(),
      });
    } else {
      setAuthContextData({
        isAuthenticated: false,
      });
    }
  }, [authContextData]);

  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    removeToken();
    setAuthContextData({
      isAuthenticated: false,
    });
    
    navigate('/');
    
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
          {authContextData.isAuthenticated ? (
            <>
              <span>{authContextData.token?.user_name}</span>
              <Link to="#logout" className="nav-logout" onClick={handleClick}>
                Logout
              </Link>
            </>
          ) : (
            <Link to="/admin/auth" className="nav-login" >Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
