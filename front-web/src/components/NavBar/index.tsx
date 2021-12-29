import './styles.scss';
import 'bootstrap/js/src/collapse.js';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary nav-container">
      <div className="container-fluid">
        <a href="home" className="nav-logo-text">
          <h4>DB CATALOG</h4>
        </a>
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
              <a href="home" className="active">
                HOME
              </a>
            </li>
            <li>
              <a href="Catalog">Catálogo</a>
            </li>
            <li>
              <a href="admin">ADMIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
