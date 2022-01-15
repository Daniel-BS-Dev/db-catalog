import { ReactComponent as Search } from '../../assets/image/lupa.svg';
import { useForm, Controller } from 'react-hook-form';
import { requestBackend } from 'util/request';
import { useState, useEffect } from 'react';
import { Category } from 'types/category';
import Select from 'react-select';
import './styles.css';


type ProductFilterData = {
  name: string;
  category: Category;
};

const ProductFilter = () => {

  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const { register, handleSubmit, setValue, control } =
    useForm<ProductFilterData>();

    useEffect(() => {
      requestBackend({ url: `/categories` }).then((response) => {
        setSelectCategories(response.data.content);
      });
    }, []);


    const onSubmit = (formData: ProductFilterData) => {
      console.log('clicou', formData);
    }

  return (
    <div className="product-filter-search">
      <form onSubmit={handleSubmit(onSubmit)} className="form-filter-search">
        <div className="product-filter-input-search">
          <input
            type="text"
            placeholder="Nome do Produto"
            className="form-control"
            {...register('name')}
          />
          <button>
            <Search />
          </button>
        </div>
        <div className="filter-select-button">
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Categoria"
                options={selectCategories}
                isClearable={true}
                classNamePrefix="select-new-product"
                getOptionLabel={(category: Category) => category.name}
                getOptionValue={(category: Category) => String(category.id)}
              />
            )}
          />
          <button className="btn btn-outline-secondary filter-button">
            Limpar <span className="filter-button-title">filtro</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
