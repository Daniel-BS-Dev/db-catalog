import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import ReactPaginate from 'react-paginate';
import './styles.css';

const ReactLib = () => {
    return(
        <ReactPaginate 
          pageCount={10} //numero de pagina
          pageRangeDisplayed={3} // numero que vai aparecer antes dos ...
          marginPagesDisplayed={1} // numero dps dos ...   
          containerClassName='pagination-container' // conatiner do meus botoes
          pageLinkClassName='pagination-item' // tipo dos botoes
          breakClassName="pagination-item"  //os tres pontinhos
          previousLabel= {<Arrow />}
          nextLabel={<Arrow />}
          previousClassName='pagination-arrow-previous'
          nextClassName='pagination-arrow-next'
          activeLinkClassName='activeNumber' //numero ativo
          disabledClassName="inactiveArrow"
        />

    );
}

export default ReactLib;