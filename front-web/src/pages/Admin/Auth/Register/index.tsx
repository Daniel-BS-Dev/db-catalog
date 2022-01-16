import { Controller, useForm } from 'react-hook-form';
import Button from 'components/Button';
import './styles.css';
import Select from 'react-select';

type Credencials = {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  roles: Role;
};

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<Credencials>();

  const onSubmit = (formData: Credencials) => {
    console.log('clicou', formData);
  };

  return (
    <div className="container-register">
      <div className="content-register">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Digite Seu Primeiro Nome"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            {...register('firstName', {
              required: 'Campo obrigatório',
            })}
          />
          <div className="invalid-feedback d-block login-error">
            {errors.username?.message}
          </div>

          <input
            type="text"
            placeholder="Digite Seu Sobrenome"
            className={`form-control space-error ${
              errors.password ? 'is-invalid' : ''
            }`}
            {...register('lastName', { required: 'Campo obrigatório' })}
          />
          <div className="invalid-feedback d-block login-error">
            {errors.password?.message}
          </div>

          <input
            type="email"
            placeholder="Email"
            className={`form-control space-error ${
              errors.username ? 'is-invalid' : ''
            }`}
            {...register('username', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido',
              },
            })}
          />
          <div className="invalid-feedback d-block login-error">
            {
              // para aparecer e tenho que usar o display block na div
              errors.username?.message //pegando erro com o hook message e a mensagem do meu required
            }
          </div>
          <input
            type="password"
            placeholder="Senha"
            className={`form-control login-input-password ${
              errors.password ? 'is-invalid' : ''
            }`}
            {...register('password', {
              required: 'Campo obrigatório',
            })}
          />
          <div className="invalid-feedback d-block login-error">
            {errors.password?.message}
          </div>

          <Controller
            name="roles"
            rules={{ required: true }} // obriga o usuario a selecionar
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Categories"
                options={selectCategories}
                classNamePrefix="select-new-product"
                isMulti
                getOptionLabel={(category: Category) => category.name}
                getOptionValue={(category: Category) => String(category.id)}
              />
            )}
          />
          <div className="invalid-feedback d-block login-error input-error">
            {errors.roles?.message}
          </div>
          <Button text="CADASTRAR" />
        </form>
      </div>
    </div>
  );
};

export default Register;
