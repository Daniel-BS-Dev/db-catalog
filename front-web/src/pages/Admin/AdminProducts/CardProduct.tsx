import { AxiosRequestConfig } from 'axios';
import Price from 'components/Price';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { requestBackend } from 'util/request';
import Categorybadge from './CategoryCardProduct';

type Props = {
  product: Product;
  onDelete : () => void;
};

const CardProduct = ({ product, onDelete }: Props) => {

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
     onDelete();
    })
  
  }

  return (
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
          {product.categories.map(category => (
          <Categorybadge name={category.name} key={category.id} />
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

  );
};

export default CardProduct;
