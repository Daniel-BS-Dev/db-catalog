import Price from 'components/Price';
import { Product } from 'types/product';

type Props = {
  product: Product;
};

const CardProduct = ({ product }: Props) => {
  return (
    <div className="container-card-product">
      <div className="content-card-product">
          <div className="card-product-image">
          <img src={product.imgUrl} alt={product.name} />
          </div>
        <div className="info-card-product">
          <h3>{product.name}</h3>
          <Price price={product.price} />
        </div>
        <div>categories</div>
        <div className="button-card-product">
          <button>EXCLUIR</button>
          <button>EXCLUIR</button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
