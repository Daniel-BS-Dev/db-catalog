import Price from 'components/Price';
import { Category } from 'types/category';
import { Product } from 'types/product';
import Categorybadge from './AdminProducts/CategoryCardProduct';

type Props = {
  product: Product;
  categories: Category[];
};

const CardProduct = ({ product, categories }: Props) => {
  return (
    <div className="container-card-product">
      <div className="content-card-product">
        <div>
          <div className="card-product-image">
            <img src={product.imgUrl} alt={product.name} />
          </div>
          <div className="info-card-product">
            <h3>{product.name}</h3>
            <Price price={product.price} />
          </div>
          <div className="categories-card-product">
          {categories.map((category) => (
            <div  key={category.id}>
              <Categorybadge name={category.name} />
            </div>
          ))}
          </div>
        </div>
        <div className="button-card-product">
          <button className="btn btn-secondary">EDITAR</button>
          <button className="btn btn-danger">EXCLUIR</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
