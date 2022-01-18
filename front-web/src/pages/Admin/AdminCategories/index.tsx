import { Route, Routes } from 'react-router-dom';
import ListCategories from './ListCategory';
import NewCategory from './NewCategory';

const AdminCategories = () => {
  return (
    <Routes>
      <Route path='/' element={<ListCategories/>} />
      <Route path='/:categoryId' element={<NewCategory/>} />
    </Routes>
  );
};

export default AdminCategories;
