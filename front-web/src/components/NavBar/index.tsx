import './styles.scss';
import 'bootstrap/js/src/collapse.js';
import { Link } from 'react-router-dom';

const NavBar = () => {
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

        <div className="nav-container-link collapse navbar-collapse" id="dscatalog-navbar">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <Link to="/" className="active">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/catalog">Catálogo</Link>
            </li>
            <li>
              <Link to="/admin">ADMIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
