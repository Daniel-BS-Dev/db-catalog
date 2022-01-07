import { hasAnyRoles, isAuthenticated } from 'util/request';
import { Routes, Route, Navigate } from 'react-router-dom';
import AdminCategories from './AdminCategories';
import AdminProducts from './AdminProducts';
import NavBarAdmin from './NavBarAdmin';
import AdminUsers from './AdminUsers';
import './styles.scss';

const Admin = () => {
  const auth = isAuthenticated();
  const redirect = <Navigate to="/admin/auth/login" />; // se não tiver autenticado direciona pra login

  return (
    <div className="admin-container">
      <NavBarAdmin />
      <div className="admin-links">
        <Routes>
          <Route path="/products" element={<Navigate replace to="/admin/products/list" />} />
          <Route path="/products/*" element={auth ? <AdminProducts /> : redirect}/>
          <Route
            path="/categories"
            element={auth ? <AdminCategories /> : redirect}
          />
          <Route path="/usernames" element={auth ? <AdminUsers /> : redirect} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
