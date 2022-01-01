import { Routes, Route } from 'react-router-dom';
import AdminCategories from './AdminCategories';
import AdminUsernames from './AdminUsername';
import AdminProducts from './AdminProduct';
import NavBarAdmin from './NavBarAdmin';
import './styles.scss';

const Admin = () => {
  return (
    <>
      <NavBarAdmin />
      <Routes>
        <Route path="/products" element={<AdminProducts/>} />
        <Route path="/categories" element={<AdminCategories/>} />
        <Route path="/usernames" element={<AdminUsernames/>} />
      </Routes>
    </>
  );
};

export default Admin;
