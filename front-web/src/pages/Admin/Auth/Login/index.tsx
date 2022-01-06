import { getTokenData, requestBackendLogin, saveAuthData } from 'util/request';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Button from 'components/Button';
import { useContext, useState } from 'react';
import './styles.scss';
import { AuthContext } from 'AuthContext';

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm<FormData>();
  const [hasError, setHasError] = useState(false);
  const navigate = useNavigate();

  //estado para comunicação com o nav
  const { authContextData, setAuthContextData } = useContext(AuthContext);

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        saveAuthData(response.data); //salvando o token
        setHasError(false);
        setAuthContextData({
          isAuthenticated: true,
          token: getTokenData(),
        });
        navigate('/admin');
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
        {hasError && ( //tratando erro com estado
          <div className="alert alert-danger">
            Erro ao efetuar login. Verifique os dados e tente novamente
          </div>
        )}
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className={`form-control ${errors.username ? 'is-invalid' : ''}`}
            {...register('username', { 
              required: 'Campo obrigatório',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Email inválido'
              }
            })}
          />
          <div className='invalid-feedback d-block login-error'>
            {// para aparecer e tenho que usar o display block na div
              errors.username?.message //pegando erro com o hook message e a mensagem do meu required
            }
          </div>
          <input
            type="password"
            placeholder="Senha"
            className={`form-control login-input-password ${errors.password ? 'is-invalid' : ''}`}
            {...register('password', { required: 'Campo obrigatório' })}
          />
          <div className='invalid-feedback d-block login-error'>
            {
              errors.password?.message
            }
          </div>
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
