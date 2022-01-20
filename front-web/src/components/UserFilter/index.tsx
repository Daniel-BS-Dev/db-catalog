import { useForm } from 'react-hook-form';
import { ReactComponent as Search } from '../../assets/image/lupa.svg';

export type UserFilterData = {
 name: string;
};

type Props = {
  filterData : (data : UserFilterData) => void;
}

const UserFilter = ({filterData} : Props) => {

  const { register, handleSubmit, setValue} = useForm<UserFilterData>();

 const onSubmit = (formData: UserFilterData) => {
    filterData(formData); // pegar o valor digitado
    setValue('name', ''); // limpar dps da consulta

  }

  return (
      <form onSubmit={handleSubmit(onSubmit)} className="form-category-filter">
        <input
            type="text"
            placeholder="Digite o Nome"
            {...register('name')}
          />
          <button>
            <Search />
          </button>
      </form>
  )
};

export default UserFilter;