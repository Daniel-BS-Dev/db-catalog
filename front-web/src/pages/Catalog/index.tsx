import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import Pagination from 'components/Pagination';
import CardProduct from 'pages/CardProduct';
import { useEffect, useState } from 'react';
import { Product } from 'types/product';
import { BASE_URL } from 'util/request';
import axios from 'axios';
import './styles.scss';

const Catalog = () => {
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
    axios(params).then((response) => {
      setPage(response.data);
      console.log(page);
    });
  }, []);

  return (
    <div className="catalog-container">
      <div className="row catalog-content">
        {page?.content.map((product) => (
          <div
            className="col-12 col-sm-4 col-md-3 col-lg-2 catalog-product"
            key={product.id}
          >
            <CardProduct product={product} />
          </div>
        ))}
      </div>
      <div className="catalog-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
