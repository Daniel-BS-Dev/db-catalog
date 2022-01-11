import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { BASE_URL } from 'util/request';
import Price from 'components/Price';
import axios from 'axios';
import './styles.css';

type UrlParams = {
  id: string;
};

const ProductDetails = () => {
  //pegar o id da url
  const { id } = useParams<UrlParams>(); // esse id tem que ser o mesmo nome do caminho que eu passei no meu router
  //chamar o produto
  const [product, setProduct] = useState<Product>();
  const[isLoader, setIsLaoder] = useState(false);

  useEffect(() => {
    setIsLaoder(true);
    axios
      .get(`${BASE_URL}/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((Error) => alert(Error))
      .finally(() => {
        setIsLaoder(false);
      })
  }, [id]);

  return (
    <div className="productDetails-container">
      <div className="productDetails-content">
        <div className="productDetails-previous">
          <Link to="/products" className='productDetails-link'>
            <Arrow className="productDetails-arrow" />
            <h2>voltar</h2>
          </Link>
        </div>
       {isLoader ? (<h1 className='productdetails-isLoader'>Carregando ...</h1>) : (
          <div className="row">
          <div className="productDetails-container-info col-xl-6">
            <div className="productDetails-image">
              <img src={product?.imgUrl} alt={product?.name} />
            </div>
            <div className="productDetails-info">
              <h2>{product?.name}</h2>
              {product && <Price price={product?.price} />}
            </div>
          </div>
          <div className="productDetails-contails-description col-xl-6">
            <div className="productdetails-description">
              <h3>Descrição do Produto</h3>
              <p>{product?.description}</p>
            </div>
          </div>
        </div>
       )}
      </div>
    </div>
  );
};

export default ProductDetails;
