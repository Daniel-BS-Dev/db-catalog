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
      {
        id: 2,
        name: 'casa',
      },

      {
        id: 3,
        name: 'Pc',
      },
    ],
  };
  ///create casa com /:productId
  return (
    <>
      <div className="list-product-add">
        <Link to="/admin/products/create">
          <button className="list-product-button btn btn-primary text-white">
            ADICIONAR
          </button>
        </Link>
        <div className="list-product-search">Search Product</div>
      </div>
      <div className="container-list-product-card">
        <CardProduct product={product} categories={product.categories} />
        <CardProduct product={product} categories={product.categories} />
        <CardProduct product={product} categories={product.categories} />
      </div>
    </>
  );
};

export default ListProduct;
