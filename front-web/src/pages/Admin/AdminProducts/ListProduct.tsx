import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/request';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import ReactLib from 'components/Pagination/paginationReact';

const ListProduct = () => {
  const [products, setProducts] = useState<SpringPage<Product>>();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    getDelete(0);
  }, []);

  const getDelete = (activePage : number) => {
    // criada essa função apenas para minha lista atualizar quando eu excluir um produto
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      withCredentials: true,
      params: {
        page: activePage,
        linePerPage: 2,
      },
    };
    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setProducts(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <Link
            to="/admin/products/create"
            className="col-12 col-md-3 list-product-button-add"
          >
            <button className="btn btn-primary text-white ">ADICIONAR</button>
          </Link>
          <div className="col-12 col-md-8 list-product-field-search">Search Product</div>
          
            {isLoader ? (
              <h1>Carregando...</h1>
            ) : (
              products?.content.map((product) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-12 list-product-list-product" key={product.id}>
                <CardProduct
                  product={product}
                  onDelete={() => getDelete(products.number)}
                />
                 </div>
              ))
            )}
           
        </div>
      </div>
      <ReactLib
        pageCount={products ? products.totalPages : 0}
        range={3}
        onChange={getDelete}
      />
    </>
  );
};

export default ListProduct;
