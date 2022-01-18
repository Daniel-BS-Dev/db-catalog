import { ReactComponent as Search } from '../../assets/image/lupa.svg';
import './styles.css';

const CategoryFilter = () => {
  return (
    <div className="category-filter">
      <form className="form-category-filter-search">
        <div className="category-filter-input-search">
          <input type="text" placeholder="Nome do Produto" />
          <button>
            <Search />
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryFilter;
