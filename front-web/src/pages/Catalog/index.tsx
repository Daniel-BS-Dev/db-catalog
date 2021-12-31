import Pagination from 'components/Pagination';
import CardProduct from 'pages/CardProduct';
import './styles.scss';

const Catalog = () => {
  return (
    <div className="catalog-container">
      <div className="row catalog-content">
        <div className="col-12 col-sm-4 col-md-3 col-lg-2 catalog-product">
          <CardProduct />
        </div>
        <div className="col-12 col-sm-4 col-md-3 col-lg-2 catalog-product">
          <CardProduct />
        </div>
      </div>
      <div className="catalog-pagination">
        <Pagination />
      </div>
    </div>
  );
};

export default Catalog;
