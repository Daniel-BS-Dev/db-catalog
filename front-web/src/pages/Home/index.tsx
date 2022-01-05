import './styles.scss';
import { ReactComponent as Img } from '../../assets/image/bighome.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { getTokenData, isAuthenticated } from 'util/request';

const Home = () => {
  return (
    <div className="home-container">
       <h1>{isAuthenticated() ? 'isAuthenticated' : 'isNotAuthenticated'}</h1>
      <div className="home-content">
        <div className="home-text">
          <h1>
            Conheça o melhor
            <br /> Catálogo de produtos
          </h1>
          <p>
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado
          </p>
          <Link to="/products" >
            <Button text="inicie agora sua busca" />
          </Link>
        </div>
        <div className="home-image">
          <Img />
        </div>
      </div>
    </div>
  );
};

export default Home;
