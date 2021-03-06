import { useForm } from 'react-hook-form';
import { ReactComponent as Search } from '../../assets/image/lupa.svg';
import './styles.css';

export type CategoryFilterData = {
  name: string;
};

type Props = {
  filterData : (data : CategoryFilterData) => void;
}

const CategoryFilter = ({ filterData } : Props) => {

  const { register, handleSubmit} = useForm<CategoryFilterData>();

  const onSubmit = (formData: CategoryFilterData) => {
    filterData(formData);
    console.log(formData)
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="form-category-filter">
        <input
            type="text"
            placeholder="Nome do Produto"
            {...register('name')}
          />
          <button>
            <Search />
          </button>
      </form>
  );
};

export default CategoryFilter;
