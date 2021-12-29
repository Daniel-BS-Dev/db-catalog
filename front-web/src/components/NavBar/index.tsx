import './styles.scss';


const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-md bg-primary nav-container">
      <div className="container-fluid">
        <a href="home" className="nav-logo-text">
          <h4>DB CATALOG</h4>
        </a>
        <div className="nav-container-link collapse navbar-collapse">
          <ul className="navbar-nav offset-md-2 main-menu">
            <li>
              <a href="home" className="active">HOME</a>
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
