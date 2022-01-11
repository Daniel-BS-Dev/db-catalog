import { Route, Routes } from 'react-router-dom';
import { ReactComponent as AuthImage } from '../../../assets/image/authImage.svg';
import Login from './Login';
import Recover from './Recover';
import Singup from './Singup';
import './styles.css';

const Auth = () => {
  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-text">
          <h1>Divulgue seus produtos no DB Catalog</h1>
          <p>
            Faça parte do nosso catálogo de divulgação e aumente a venda dos
            seus produtos.
          </p>
          <div className="authImage">
            <AuthImage />
          </div>
        </div>
        <div className="auth-router">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/recover" element={<Recover />} />
            <Route path="/singup" element={<Singup />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Auth;
