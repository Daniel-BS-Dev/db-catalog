import Button from 'components/Button';
import './styles.scss';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Login</h1>
        <form>
          <input type="email" placeholder="Email" className="form-control" />
          <input type="password" placeholder="Senha" className="form-control login-input-password" />
        </form>
        <p className="login-help">Esqueci a senha?</p>
        <div className="login-button">
          <Button text="LOGAR" />
          </div>
        <p className="login-fillOut">
          Não tem Cadastro? <span>CADASTRAR</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
