import { Controller, useForm } from 'react-hook-form';
import Button from 'components/Button';
import './styles.css';
import Select from 'react-select';
import { Role } from 'types/role';
import { User } from 'types/user';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/request';

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>();

  const [selectRoles, setSelectRoles] = useState<Role[]>([]);

  useEffect(() => {
    requestBackend({ url: `/roles` }).then((response) => {
      setSelectRoles(response.data.content);
    });
  }, []);

  const onSubmit = (formData: User) => {
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
            className={`form-control ${errors.firstName ? 'is-invalid' : ''}`}
            {...register('firstName', {
              required: 'Campo obrigatório',
            })}
          />
          <div className="invalid-feedback d-block login-error">
            {errors.firstName?.message}
          </div>

          <input
            type="text"
            placeholder="Digite Seu Sobrenome"
            className={`form-control space-error ${
              errors.lastName ? 'is-invalid' : ''
            }`}
            {...register('lastName', { required: 'Campo obrigatório' })}
          />
          <div className="invalid-feedback d-block login-error">
            {errors.lastName?.message}
          </div>

          <input
            type="email"
            placeholder="Email"
            className={`form-control space-error ${
              errors.email ? 'is-invalid' : ''
            }`}
            {...register('email', {
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
              errors.email?.message //pegando erro com o hook message e a mensagem do meu required
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
            rules={{ required: false }} // obriga o usuario a selecionar
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Perfil"
                options={selectRoles}
                classNamePrefix="select-new-product"
                isMulti
                getOptionLabel={(roles: Role) => roles.authority}
                getOptionValue={(roles: Role) => String(roles.id)}
              />
            )}
          />
          <div className="input-error">
            {errors.roles && (
              <div className="invalid-feedback d-block login-error">
                campo obrigatório
              </div>
            )}
          </div>
          <Button text="CADASTRAR" />
        </form>
      </div>
    </div>
  );
};

export default Register;
