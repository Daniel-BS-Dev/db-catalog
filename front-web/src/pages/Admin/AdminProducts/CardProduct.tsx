import { AxiosRequestConfig } from 'axios';
import Price from 'components/Price';
import { Link } from 'react-router-dom';
import { Category } from 'types/category';
import { Product } from 'types/product';
import { requestBackend } from 'util/request';
import Categorybadge from './CategoryCardProduct';

type Props = {
  product: Product;
  categories: Category[];
};

const CardProduct = ({ product, categories }: Props) => {

  const handleDelete = (productId: number) => {

    if (!window.confirm('Confirme em Ok')){//para confirma se vai deletar ou não
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/products/${productId}`,
      withCredentials: true,
    };
    
    requestBackend(config)
    .then(() => {
      console.log(`Produto deletado${productId}`)
    })
  
  }

  return (
    <div className="container-card-product">
      <div className="content-card-product">
        <div className="card-product-image">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="product-card-product">
          <div className="info-card-product">
            <h3>{product.name}</h3>
            <Price price={product.price} />
          </div>
          <div className="categories-card-product">
            {categories.map((category) => (
              <div key={category.id}>
                <Categorybadge name={category.name} />
              </div>
            ))}
          </div>
        </div>
        <div className="button-card-product">
          <button className="btn btn-outline-danger" onClick={() => handleDelete(product.id)}>EXCLUIR</button>
          <Link to={`/admin/products/${product.id}`} className='link-button-cardproduct'>
            <button className="btn btn-outline-secondary">EDITAR</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
