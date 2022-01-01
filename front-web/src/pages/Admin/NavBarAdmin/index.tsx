import { NavLink } from 'react-router-dom';
import './styles.scss';


const NavBarAdmin = () => {
  return (
    <nav className="navbaradmin-container">
      <div className="navbaradmin-content">
        <ul >
          <li>
            <NavLink to="/admin/products" className='navLink' >Produtos</NavLink>
          </li>
          <li >
            <NavLink to="/admin/categories"  className='navLink'>Categorias</NavLink>
          </li>
          <li>
            <NavLink to="/admin/usernames"  className='navLink'>Usuários</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBarAdmin;
