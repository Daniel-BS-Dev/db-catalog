import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import Product from '../../assets/image/product.png';
import './styles.scss';
import Price from 'components/Price';

const ProductDetails = () => {
  return (
    <div className="productDetails-container">
      <div className="productDetails-content">
        <div className="productDetails-previous">
          <Arrow className='productDetails-arrow'/>
          <h2>voltar</h2>
        </div>
        <div className="row">
          <div className="productDetails-container-info col-xl-6">
            <div className="productDetails-image">
              <img src={Product} alt="image do product" />
            </div>
            <div className="productDetails-info">
              <h2>Computador Desktop - Intel Core i7</h2>
              <Price />
            </div>
          </div>
          <div className="productDetails-contails-description col-xl-6">
            <div className="productdetails-description">
              <h3>Descrição do Produto</h3>
              <p>
                Seja um mestre em multitarefas com a capacidade para exibir
                quatro aplicativos simultâneos na tela. A tela está ficando
                abarrotada? Crie áreas de trabalho virtuais para obter mais
                espaço e trabalhar com os itens que você deseja. Além disso,
                todas as notificações e principais configurações são reunidas em
                uma única tela de fáci
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
