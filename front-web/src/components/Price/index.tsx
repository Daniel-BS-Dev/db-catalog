import { formatPrice } from 'util/FormatPrice';
import './styles.css';

type Props = {
  price: number;
}

const Price = ({price}:Props) => {
    return (
     <div className='price-container'>
       <strong>R$</strong>
       <h4>{formatPrice(price)}</h4>
     </div>
    );
}

export default Price;