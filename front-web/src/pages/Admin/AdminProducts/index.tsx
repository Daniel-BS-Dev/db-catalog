import { Route, Routes } from 'react-router-dom';
import ListProduct from './ListProduct';
import NewProduct from './AddProduct/NewProduct';
import './styles.scss';

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