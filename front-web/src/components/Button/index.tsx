import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import './styles.css';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <div className="button-container">
      <button className="button">
        <strong className="btn btn-primary">{text}</strong>
        <span>
          <Arrow />
        </span>
      </button>
    </div>
  );
};

export default Button;
