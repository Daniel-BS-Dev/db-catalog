import { AxiosParams } from 'types/vendor/axios';
import { SpringPage } from 'types/vendor/spring';
import Pagination from 'components/Pagination';
import CardProduct from 'pages/CardProduct';
import { useEffect, useState } from 'react';
import { Product } from 'types/product';
import { BASE_URL } from 'util/request';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './styles.scss';

const Catalog = () => {
  //SpringPage -> foi o tipo que eu criei no meu vendor
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoader, setIsLoader] = useState(false);

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
    setIsLoader(true);
    axios(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoader(true);
      });
  }, []);

  return (
    <div className="catalog-container">
      <div className="row catalog-content">
        {isLoader ? (
          <h1 className='catalog-loader'>Carregando...</h1>
        ) : (
          page?.content.map((product) => (
            <Link
              to={`products/${product.id}`}
              className="col-12 col-sm-4 col-md-3 col-lg-2 catalog-product"
              key={product.id}
            >
              <CardProduct product={product} />
            </Link>
          ))
        )}
        <div className="catalog-pagination">
        <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Catalog;
