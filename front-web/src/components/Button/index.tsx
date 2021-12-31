import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import { Link } from 'react-router-dom';
import './styles.scss';

type Props = {
  text: string;
}

const Button = ({ text }:Props) => {
  return (
      <Link to="/catalog" className="button-container">
        <button className="button">
          <strong className="btn btn-primary">{ text }</strong>
          <span>
            <Arrow />
          </span>
        </button>
      </Link>
  );
};

export default Button;
