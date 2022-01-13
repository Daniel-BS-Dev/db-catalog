import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/request';
import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';

const ListProduct = () => {
  const [product, setProduct] = useState<SpringPage<Product>>();
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    getDetele();
  }, []);

  const getDetele = () => {
    // criada essa função apenas para minha lista atualizar quando eu excluir um produto
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      withCredentials: true,
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
              product?.content.map((product) => (
                <div className="col-12 col-md-6 col-lg-4 col-xl-12 list-product-list-product" key={product.id}>
                <CardProduct
                  product={product}
                  onDelete={() => getDetele()}
                />
                 </div>
              ))
            )}
           
        </div>
      </div>
    </>
  );
};

export default ListProduct;
