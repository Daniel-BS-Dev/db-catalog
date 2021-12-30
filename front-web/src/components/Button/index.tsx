import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import { Link } from 'react-router-dom';
import './styles.scss';

const Button = () => {
  return (
      <Link to="/catalog" className="button-container">
        <button className="button">
          <strong className="btn btn-primary">inicie agora sua busca</strong>
          <span>
            <Arrow />
          </span>
        </button>
      </Link>
  );
};

export default Button;
