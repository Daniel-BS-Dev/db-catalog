import { ReactComponent as Arrow } from '../../assets/image/Seta.svg';
import { generatedList } from 'util/list';
import './styles.scss';

type Props = {
  totalPages: number;
  pageIsActive: number;
  onChange: (item: number) => void;
};

const Pagination = ({ totalPages, pageIsActive, onChange }: Props) => {
  const items = generatedList(totalPages);
  const previousArrow = totalPages > 0 && pageIsActive > 0 ? 'activeArrow' : 'inactiveArrow';
  const nextArrow = pageIsActive + 1 < totalPages ? 'activeArrow' : 'inactiveArrow';

  return (
    <div className="pagination-container">
      <div
        onClick={() => onChange(pageIsActive - 1)}
        className={`pagination-arrow-previous ${previousArrow}`}
      >
        <Arrow />
      </div>
      {items.map((item) => (
        <div
          key={item}
          className={`pagination-number ${
            item === pageIsActive ? 'activeNumber' : ''
          }`}
          onClick={() => onChange(item)}
        >
          {item  < 10 ? '0' + (item + 1) : (item + 1)}
        </div>
      ))}
      <div
        onClick={() => onChange(pageIsActive + 1)}
        className={`pagination-arrow-next ${nextArrow}`}
      >
        <Arrow />
      </div>
    </div>
  );
};

export default Pagination;
