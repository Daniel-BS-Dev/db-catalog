import { Product } from 'types/product';
import Price from 'components/Price';
import './styles.css';

type Props ={
  product: Product;
}

const CardProduct = ({product} : Props) => {

  return (
    <div className="cardProduct-container">
      <div className="cardProduct-content">
        <div className="cardproduct-image">
          <img src={product.imgUrl} alt={product.name} />
        </div>
        <div className="cardProduct-description">
          <h6>{product.name}</h6>
          <div className="card-Product-container-price">
            <Price price={product.price} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
