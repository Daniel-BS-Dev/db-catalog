import Button from 'components/Button';
import { useForm } from 'react-hook-form';
import './styles.scss';

type FormData = {
  email: string;
  password: string;
}

const Login = () => {
  const {register,handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (formData: FormData ) => {
   requestBackendLogin(formData)
   .then(reponse => {
     console.log('SUCCESS' response);
   })
   .catch(error => console.log(error))
  }

  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            placeholder="Email"
            className="form-control"
            {...register('email', { required: true })}
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
