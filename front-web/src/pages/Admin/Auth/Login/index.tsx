import Button from 'components/Button';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { requestBackendLogin } from 'util/request';
import './styles.scss';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [hasError, setHasError] = useState(false);

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        console.log('SUCCESS', response);
      })
      .catch((error) => {
        setHasError(true);
        console.log(error);
      });
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        {hasError && (
          <div className="alert alert-danger">
            Erro ao efetuar login. Verifique os dados e tente novamente
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            {...register('username', { required: true })}
          />
          <input
            type="password"
            placeholder="Senha"
            className="form-control login-input-password"
            {...register('password', { required: true })}
          />
          <p className="login-help">Esqueci a senha?</p>
          <div className="login-button">
            <Button text="LOGAR" />
          </div>
          <p className="login-fillOut">
            Não tem Cadastro? <span>CADASTRAR</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
