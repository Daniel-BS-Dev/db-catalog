import { ReactComponent as Search } from '../../assets/image/lupa.svg';
import { useForm, Controller } from 'react-hook-form';
import { requestBackend } from 'util/request';
import { useState, useEffect } from 'react';
import { Category } from 'types/category';
import Select from 'react-select';
import './styles.css';


export type ProductFilterData = {
  name: string;
  category: Category | null;
};

// props pra mudar o filter
type Props = {
  filterData : (data : ProductFilterData) => void;
}

const ProductFilter = ({ filterData } : Props) => {

  const [selectCategories, setSelectCategories] = useState<Category[]>([]);
  const { register, handleSubmit, setValue, getValues, control } =
    useForm<ProductFilterData>();

    useEffect(() => {
      requestBackend({ url: `/categories` }).then((response) => {
        setSelectCategories(response.data.content);
      });
    }, []);

    const onSubmit = (formData: ProductFilterData) => {
      filterData(formData);
    }

    //função para limpar o campo
   const handleOnClick = () => {
     setValue('name', '');
     setValue('category', null);
   }

   //função para enviar categoria
   const onChangeCategory = (value: Category) => {
       setValue('category', value); // pegando oq veio de argumento
  
       const obj : ProductFilterData = {
         name : getValues('name'),
         category : getValues('category')
       }

       filterData(obj);
  
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
         <div className='filter-select-product'>
         <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Categoria"
                options={selectCategories}
                isClearable={true}
                onChange={(value) => onChangeCategory(value as Category)}
                classNamePrefix="select-filter-product"
                getOptionLabel={(category: Category) => category.name}
                getOptionValue={(category: Category) => String(category.id)}
              />
            )}
          />
         </div>
          <button onClick={handleOnClick} className="btn btn-outline-secondary filter-button">
            Limpar <span className="filter-button-title">filtro</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductFilter;
