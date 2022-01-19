import ReactLib from 'components/Pagination/paginationReact';
import { SpringPage } from 'types/vendor/spring';
import { requestBackend } from 'util/request';
import { useCallback, useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import CardProduct from './CardProduct';
import { Link } from 'react-router-dom';
import { Product } from 'types/product';
import ProductFilter, { ProductFilterData } from 'components/ProductFilter';

type ControlComponentsData = {
  activePage: number;
  filterData: ProductFilterData;
};

const ListProduct = () => {
  const [products, setProducts] = useState<SpringPage<Product>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      activePage: 0,
      filterData: {
        name: '',
        category: null,
      },
    });
  const [isLoader, setIsLoader] = useState(false);

  const getDelete = useCallback(() => {
    // o callback e pra não entrar em loop
    // criada essa função apenas para minha lista atualizar quando eu excluir um produto
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/products',
      withCredentials: true,
      params: {
        page: controlComponentsData.activePage,
        linePerPage: 3,
        name: controlComponentsData.filterData.name,
        categoryId: controlComponentsData.filterData.category?.id,
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
  }, [controlComponentsData]);

  useEffect(() => {
    getDelete();
  }, [getDelete]);

  // função para filter de produto
  //const handleSubmitFilter = (data : ProductFilterData) => {
  // setControlComponentsData({activePage : 0, filterData: data })}
  //}

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
          <div className="col-12 col-md-8 container-product-filter ">
            <ProductFilter
              filterData={(data: ProductFilterData) => {
                setControlComponentsData({ activePage: 0, filterData: data });
              }}
            />
          </div>
          <div className="row">
            {isLoader ? (
              <h1  className="carregando">Carregando...</h1>
            ) : (
              products?.content.map((product) => (
                <div
                  className="col-12 col-md-6 col-lg-4 col-xl-12 list-product-list-product"
                  key={product.id}
                >
                  <CardProduct product={product} onDelete={() => getDelete()} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <ReactLib
        forcePage={products?.number}
        pageCount={products ? products.totalPages : 0}
        range={3}
        onChange={(isActivePage: number) =>
          setControlComponentsData({
            activePage: isActivePage,
            filterData: controlComponentsData.filterData,
          })
        }
      />
    </>
  );
};

export default ListProduct;
