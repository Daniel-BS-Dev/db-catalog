import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import { useEffect, useState } from 'react';
import { BASE_URL } from 'util/request';
import { Product } from 'types/product';
import Price from 'components/Price';
import axios from 'axios';
import './styles.scss';

const CardProduct = () => {
  //SpringPage -> foi o tipo que eu criei no meu vendor
  const [page, setPage] = useState<SpringPage<Product>>();

  useEffect(() => {
    //AxiosParams -> foi outor tipo que eu criei no vendor
    const params: AxiosParams = {
      method: 'GET',
      url: `${BASE_URL}/products`,
      params: {
        page: 0,
        size: 12,
      },
    };
    //como eu já coloquei o get no AxiosParams eu não preciso colocar aqui
    axios(params)
    .then(response => {
      setPage(response.data);
      console.log(page);
    })

  }, []);

  return (
    <div className="cardProduct-container">
      <div className="cardProduct-content">
        <div className="cardproduct-image">
          <img src={''} alt="imagem product" />
        </div>
        <div className="cardProduct-description">
          <h6>Computador Desktop - Intel Core i7</h6>
          <div>
            <Price price={233.9} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
