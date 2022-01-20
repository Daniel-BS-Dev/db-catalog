import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import ReactPaginate from 'react-paginate';
import './styles.css';

type Props = {
    forcePage?: number;
    pageCount : number,
    range : number,
    onChange? : (item : number) => void;
}

const ReactLib = ({forcePage, pageCount, range, onChange } : Props) => {

    return(
        <ReactPaginate 
          forcePage={forcePage}
          pageCount={pageCount} //numero de pagina
          pageRangeDisplayed={range} // numero que vai aparecer antes dos ...
          onPageChange = {( items ) => (onChange) ? onChange(items.selected) : {}}
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