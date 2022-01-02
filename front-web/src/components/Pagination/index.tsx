import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import './styles.scss';

const Pagination = () => {
    return (
       <div className='pagination-container'>
           <div className='disactive pagination-arrow-previous'>
              <Arrow />
           </div>
           <div className='pagination-number'>
               <button className='activeButton'>01</button>
               <button>02</button>
               <button>03</button>
               <button>04</button>
               <button>....</button>
               <button>10</button>
           </div>
           <div className='active pagination-arrow-next'>
              <Arrow />
           </div>
       </div>
    );
}

export default Pagination;