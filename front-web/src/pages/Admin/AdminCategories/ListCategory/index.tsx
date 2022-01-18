import { useEffect, useState } from 'react';
import { SpringPage } from 'types/vendor/spring';
import { Category } from 'types/category';
import CardCategory from '../CardCategory';
import { requestBackend } from 'util/request';
import CategoryFilter from 'components/CategoryFilter';
import { Link } from 'react-router-dom';

const ListCategories = () => {
  const [categories, setCategories] = useState<SpringPage<Category>>();

  useEffect(() => {
    requestBackend({ url: '/categories' }).then((response) => {
      setCategories(response.data);
    });
  }, []);

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
            <CategoryFilter />
          </div>
        </div>
      </div>
      {categories?.content.map((category) => (
        <CardCategory nameCategory={category} key={category.id} />
      ))}
    </>
  );
};

export default ListCategories;
