import { useCallback, useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Category } from 'types/category';
import CardCategory from '../CardCategory';
import { requestBackend } from 'util/request';
import CategoryFilter, { CategoryFilterData } from 'components/CategoryFilter';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import './styles.css';


type ControlComponentsData = {
  filterData: CategoryFilterData;
};

const ListCategories = () => {
  const [categories, setCategories] = useState<SpringPage<Category>>();
  const [controlComponentsData, setControlComponentsData] =
    useState<ControlComponentsData>({
      filterData: {
        name: '',
      },
    });
  const [isLoader, setIsLoader] = useState(false);

  const getDelete= useCallback(() => {
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/categories',
      withCredentials: true,
      params: {
        name: controlComponentsData.filterData.name
       
      },
    };
    setIsLoader(true);
    requestBackend(params)
      .then((response) => {
        setCategories(response.data);
      })
      .finally(() => {
        setIsLoader(false);
      });
  }, [controlComponentsData]);

  useEffect(() => {
    getDelete();
  }, [getDelete]);

  return (
    <>
      <div className="container-card-category">
        <div className="row">
          <Link
            to="/admin/categories/create"
            className="col-12 col-md-3 list-product-button-add"
          >
            <button className="btn btn-primary text-white ">ADICIONAR</button>
          </Link>
          <div className="col-12 col-md-8">
            <CategoryFilter  filterData={(data: CategoryFilterData) => {
                setControlComponentsData({ filterData: data });
              }}/>
          </div>
        </div>
      </div>
      <div className="container-category-list">
      {isLoader ? (<h1  className="carregando">Carregando....</h1>) : (categories?.content.map((category) => (
        <CardCategory
          nameCategory={category}
          key={category.id}
          onDelete={() => getDelete()}
        />
      )))}</div>
    </>
  );
};

export default ListCategories;
