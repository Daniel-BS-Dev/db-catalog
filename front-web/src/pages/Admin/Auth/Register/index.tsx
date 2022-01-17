import { Controller, useForm } from 'react-hook-form';
import Button from 'components/Button';
import './styles.css';
import Select from 'react-select';
import { Role } from 'types/role';
import { User } from 'types/user';
import { useEffect, useState } from 'react';
import { requestBackend } from 'util/request';
import { AxiosRequestConfig } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Register = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<User>();

  const [selectRoles, setSelectRoles] = useState<Role[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    requestBackend({ url: `/roles` }).then((response) => {
      setSelectRoles(response.data.content);
    });
  }, []);

  const onSubmit = (formData: User) => {
    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/users',
      data: formData,
    };
    requestBackend(config)
      .then(() => {
        navigate('/admin/auth');
        toast.success('Cadastro realizado com sucesso');
      })
      .catch(() => {
        toast.error(
          'Email já existe. Verifique o email digitado e tente novamente'
        );
      });
  };

  return (
    <div className="container-register">
      <div className="content-register">
        <h1>Cadastro</h1>
        <form onSubmit={handleSubmit(onSubmit)} className='form-register'>
          <input
            type="text"
            placeholder="Digite Seu Primeiro Nome"
            className={`input-register space-error form-control ${
              errors.firstName ? 'is-invalid' : ''
            }`}
            {...register('firstName', {
              required: 'Campo obrigatório',
            })}
          />
          <div className="invalid-feedback d-block">
            {errors.firstName?.message}
          </div>

          <input
            type="text"
            placeholder="Digite Seu Sobrenome"
            className={`input-register space-error form-control ${
              errors.lastName ? 'is-invalid' : ''
            }`}
            {...register('lastName', { required: 'Campo obrigatório' })}
          />
          <div className="invalid-feedback d-block ">
            {errors.lastName?.message}
          </div>

          <input
            type="email"
            placeholder="Email"
            className={`input-register space-error form-control ${
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
          <div className="invalid-feedback d-block">
            {
              // para aparecer e tenho que usar o display block na div
              errors.email?.message //pegando erro com o hook message e a mensagem do meu required
            }
          </div>
          <input
            type="password"
            placeholder="Senha"
            className={`input-register space-error form-control ${
              errors.password ? 'is-invalid' : ''
            }`}
            {...register('password', {
              required: 'Campo obrigatório',
              pattern: {
                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/,
                message:
                  'Senha deve ter letras maiuscula, minuscula e numero, devendo ter no minimo 8 caracter',
              },
            })}
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
          <div className="input-error"></div>
          <Controller
            name="roles"
            rules={{ required: true }} // obriga o usuario a selecionar
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                placeholder="Perfil"
                options={selectRoles}
                classNamePrefix="select-register"
                isMulti
                getOptionLabel={(roles: Role) => roles.authority}
                getOptionValue={(roles: Role) => String(roles.id)}
              />
            )}
          />
          <div className="input-error">
            {errors.roles && (
              <div className="invalid-feedback d-block ">
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
