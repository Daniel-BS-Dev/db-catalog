import { Link } from 'react-router-dom';
import { Category } from 'types/category';
import './styles.css';

type Props = {
  nameCategory: Category;
};

const CardCategory = ({ nameCategory }: Props) => {
  return (
    <div className="card-category-container">
      <div className="card-category-content">
        <h2>{nameCategory.name}</h2>
        <div className="card-category-button">
          <Link to={`/admin/categories/${nameCategory.id}`}>
            <button className="btn btn-outline-secondary">EDITAR</button>
          </Link>
          <button className="btn btn-outline-danger">EXCLUIR</button>
        </div>
      </div>
    </div>
  );
};

export default CardCategory;
