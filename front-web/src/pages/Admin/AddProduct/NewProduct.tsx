import { ReactComponent as Previous} from '../../../assets/image/Seta.svg';
import './styles.scss';


const NewProduct = () => {
    return(
     <div className="container-new-product">
       <div className="content-new-product">
           <div className="title-new-product">
              <Previous className='previous-new-product'/>
              <h2>Voltar</h2>
           </div>
           <form>
               <div className='row'>
                   <div className='col-12 col-md-6 input-new-product'>
                       <input type='text'placeholder='Nome do produto'/>
                       <input type='text' placeholder='Categoria'/>
                       <input type='number' placeholder='Preço'/>
                   </div>
                   <div className='col-12 col-md-6'>
                       <textarea rows={2}>Descição</textarea>
                   </div>
                   <div className='buttons-new-product'>
                      <button className='btn btn-danger'>Cancelar</button>
                      <button className='btn btn-primary'>Salvar</button>
                   </div>
               </div>
           </form>
       </div>
     </div>
    );
}

export default NewProduct;