import { Route, Routes } from 'react-router-dom';
import NewProduct from './AddProduct/NewProduct';
import ListProduct from './ListProduct';
import './styles.css';

const AdminProducts = () => {
    return(
    <div className='adminproducts-container'>
      <Routes>
          <Route path="/" element={<ListProduct />} />
          <Route path="/:productId" element={<NewProduct />} />
      </Routes>
    </div>
    );
}

export default AdminProducts;