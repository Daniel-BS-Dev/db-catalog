import { BASE_URL, requestBackend } from 'util/request';
import { SpringPage } from 'types/vendor/spring';
import Pagination from 'components/Pagination';
import CardProduct from 'pages/CardProduct';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import { Product } from 'types/product';
import { Link } from 'react-router-dom';
import './styles.css';


const Catalog = () => {
  //SpringPage -> foi o tipo que eu criei no meu vendor
  const [page, setPage] = useState<SpringPage<Product>>();
  const [isLoader, setIsLoader] = useState(false);
  const [isActive, setIsActive] = useState(0);

  useEffect(() => {
    //AxiosRequestConfig e um tipo do axios
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: "/products",
      params: {
        page: isActive,
        linePerPage: 10,
      },
    };
    //como eu já coloquei o get no AxiosParams eu não preciso colocar aqui
    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setPage(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [isActive]);

  return (
    <div className="container-card">
      <div className="row">
        {isLoader ? (
          <h1 className="catalog-loader">Carregando...</h1>
        ) : (
          page?.content.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-5 col-md-3 col-lg-2 catalog-product"
            >
              <Link to={`/products/${product.id}`}>
              <CardProduct product={product} />
            </Link>
            </div>
          ))
        )}
        <div className="catalog-pagination">
          {page && (
            <Pagination
              totalPages={page?.totalPages}
              pageIsActive={isActive}
              onChange={(pageActive) => setIsActive(pageActive)}
            />
          )}
        </div>
        </div>
    </div>
  );
};

export default Catalog;
