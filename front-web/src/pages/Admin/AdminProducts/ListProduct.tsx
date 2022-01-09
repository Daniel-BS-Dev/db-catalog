import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/request';
import CardProduct from '../CardProduct';

const ListProduct = () => {
  const [product, setProduct] = useState<SpringPage<Product>>();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      params: {
        page: 0,
        linePerPage: 100,
      },
    };
    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setProduct(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, []);

  return (
    <>
      <div className="list-product-add">
        <Link to="/admin/products/create">
          <button className="list-product-button btn btn-primary text-white">
            ADICIONAR
          </button>
        </Link>
        <div className="list-product-search">Search Product</div>
      </div>

      {isLoader ? (<h1>carregando...</h1>) : (product?.content.map((product) => (
        <div className="container-list-product-card">
          <CardProduct product={product} categories={product.categories} />
        </div>
      )))}
    </>
  );
};

export default ListProduct;
