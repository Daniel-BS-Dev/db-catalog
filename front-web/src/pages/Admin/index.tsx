import { Routes, Route } from 'react-router-dom';
import AdminCategories from './AdminCategories';
import AdminProducts from './AdminProducts';
import NavBarAdmin from './NavBarAdmin';
import AdminUsers from './AdminUsers';
import './styles.scss';


const Admin = () => {
  return (
    <div className="admin-container">
      <NavBarAdmin />
      <div className="admin-links">
        <Routes>
          <Route path="/products" element={<AdminProducts />} />
          <Route path="/categories" element={<AdminCategories />} />
          <Route path="/usernames" element={<AdminUsers />} />
        </Routes>
      </div>
    </div>
  );
};

export default Admin;
