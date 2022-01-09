import { Link } from 'react-router-dom';
import { ReactComponent as Previous} from '../../../assets/image/Seta.svg';
import './styles.scss';


const NewProduct = () => {
    return(
     <div className="container-new-product">
       <div className="content-new-product">
           <Link to="/admin/products" className="title-new-product">
              <Previous className='previous-new-product'/>
              <h2>Voltar</h2>
           </Link>
           <form>
               <div className='row'>
                   <div className='col-12 col-md-6 input-new-product'>
                       <input type='text'placeholder='Nome do produto' className='form-control'/>
                       <input type='text' placeholder='Categoria' className='form-control'/>
                       <input type='number' placeholder='Preço' className='form-control'/>
                   </div>
                   <div className='col-12 col-md-6 description-new-product'>
                       <textarea rows={10} className='form-control'>descrição</textarea>
                   </div>
                   <div className='buttons-new-product'>
                      <button className='btn btn-outline-danger'>Cancelar</button>
                      <button className='btn btn-outline-primary'>Salvar</button>
                   </div>
               </div>
           </form>
       </div>
     </div>
    );
}

export default NewProduct;