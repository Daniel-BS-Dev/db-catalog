import { AxiosRequestConfig } from 'axios';
import { Link } from 'react-router-dom';
import { Category } from 'types/category';
import { requestBackend } from 'util/request';
import { toast } from "react-toastify";
import './styles.css';

type Props = {
  nameCategory: Category;
  onDelete : () => void;
};

const CardCategory = ({ nameCategory, onDelete}: Props) => {

  const handleDelete = (productId: number) => {

    if (!window.confirm('Confirme em Ok')){//para confirma se vai deletar ou não
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/categories/${productId}`,
      withCredentials: true,
    };
    
    requestBackend(config)
    .then(() => {
     onDelete();
     toast.success('Produto deletado com sucesso')
    })
    .catch(()=> {
      toast.error('Category não poder apagada esta ligada a um produto')
    })
  
  }

  return (
    <div className="card-category-container">
      <div className="card-category-content">
        <h2>{nameCategory.name}</h2>
        <div className="card-category-button">
          <Link to={`/admin/categories/${nameCategory.id}`}>
            <button className="btn btn-outline-secondary">EDITAR</button>
          </Link>
          <button className="btn btn-outline-danger" onClick={() => handleDelete(nameCategory.id)}>EXCLUIR</button>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
