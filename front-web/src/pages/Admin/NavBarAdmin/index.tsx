import { NavLink } from 'react-router-dom';
import './styles.scss';

const NavBarAdmin = () => {
  return (
    <nav className="navbaradmin-container">
      <div className="navbaradmin-content">
        <ul >
          <li >
            <NavLink to="/products" className='navLink active' >Produtos</NavLink>
          </li>
          <li >
            <NavLink to="/categories" className='navLink'>Categorias</NavLink>
          </li>
          <li >
            <NavLink to="/usernames" className='navLink'>Usuários</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
