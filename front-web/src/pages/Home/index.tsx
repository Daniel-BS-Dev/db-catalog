import './styles.scss';
import { ReactComponent as Img } from '../../assets/image/bighome.svg';
import Button from '../../components/Button';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>Conheça o melhor<br/> Catálogo de produtos</h1>
          <p>
            Ajudaremos você a encontrar os melhores produtos disponíveis no
            mercado
          </p>
          <Button />
        </div>
        <div className="home-image">
        <Img />
        </div>
      </div>
    </div>
  );
};

export default Home;
