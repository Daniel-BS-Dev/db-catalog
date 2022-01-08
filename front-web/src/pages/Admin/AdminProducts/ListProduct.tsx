import { Link } from 'react-router-dom';
import CardProduct from '../CardProduct';

const ListProduct = () => {
  const product = {
    id: 1,
    name: 'Computador Desktop - Intel Core i7',
    price: 2500.0,
    date: '12/34/43',
    description: 'otimo produto',
    imgUrl:
      'https://raw.githubusercontent.com/devsuperior/dscatalog-resources/master/backend/img/3-big.jpg',
    categories: [
      {
        id: 1,
        name: 'tv',
      },
    ],
  };
///create casa com /:productId
  return (
    <>
      <Link to="/admin/products/create"> 
        <button className="list-product-button btn btn-primary text-white">
          ADICIONAR
        </button>
      </Link>
      <div className="list-product-search">Search Product</div>
      <div className="container-list-product-card">
        <CardProduct product={product} />
        <CardProduct product={product} />
        <CardProduct product={product} />
      </div>
    </>
  );
};

export default ListProduct;
