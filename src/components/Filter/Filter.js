import PropTypes from 'prop-types';
import s from './Filter.module.css';

function Filter({ onInputChange, filterValue }) {
  return (
    <div className={s.filter}>
      <p className={s.filter__title}>Find contacts by name</p>
      <input
        className={s.filter__input}
        type="text"
        name="filter"
        onChange={onInputChange}
        value={filterValue}
      />
    </div>
  );
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  filterValue: PropTypes.string,
};

export default Filter;