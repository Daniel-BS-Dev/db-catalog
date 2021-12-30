import './styles.scss';
import { ReactComponent as Img } from '../../assets/image/bighome.svg';
import Button from '../../components/Button';


const Home = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="home-text">
          <h1>
            Conheça o melhor
            <br /> catálogo de produtos
          </h1>
          <p>
            Ajudaremos voçê a encontrar os<br/> melhores produtos disponíveis<br/> no
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
