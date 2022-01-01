import { Routes, Route } from 'react-router-dom';
import AdminCategories from './AdminCategories';
import AdminUsernames from './AdminUsername';
import AdminProducts from './AdminProduct';
import NavBarAdmin from './NavBarAdmin';
import './styles.scss';

const Admin = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-3">
      <NavBarAdmin />
      </div>
      <div className="col-12 col-xl-9 admin-links">
      <Routes>
        <Route path="/products" element={<AdminProducts />} />
        <Route path="/categories" element={<AdminCategories />} />
        <Route path="/usernames" element={<AdminUsernames />} />
      </Routes>
      </div>
    </div>
  ); 
};

export default Admin;
