import Price from 'components/Price';
import  Product from '../../assets/image/product.png';
import './styles.scss';

const CardProduct = () => {
    return(
       <div className='cardProduct-container'>
         <div className='cardProduct-content'>
          <div className='cardproduct-image'>
          <img src={Product} alt="imagem product" />
          </div>
          <div className='cardProduct-description'>
            <h6>Computador Desktop - Intel Core i7</h6>
            <div><Price/></div>
          </div>
         </div>
       </div>
    );
}

export default CardProduct;