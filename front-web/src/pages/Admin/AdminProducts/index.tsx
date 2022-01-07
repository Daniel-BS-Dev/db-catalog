import { Route, Routes } from 'react-router-dom';
import ListProduct from './ListProduct';
import NewProduct from './NewProduct';
import './styles.scss';

const AdminProducts = () => {
    return(
    <div className='adminproducts-container'>
      <Routes>
          <Route path="/list" element={<ListProduct /> } />
          <Route path="/form" element={<NewProduct />} />
      </Routes>
    </div>
    );
}

export default AdminProducts;