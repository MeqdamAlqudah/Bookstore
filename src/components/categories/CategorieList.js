import PropTypes from 'prop-types';
import classes from './CategorieList.module.css';

function CategoriesList(props) {
  const { hide } = props;
  const { selectHandler } = props;
  return (
    <ul className={hide ? classes.ul : classes.hidden}>
      <button type="button" name="Action" onClick={selectHandler}>Action</button>
      <button type="button" name="Science Fiction" onClick={selectHandler}>Science Fiction</button>
      <button type="button" name="Economy" onClick={selectHandler}>Economy</button>
    </ul>
  );
}

CategoriesList.propTypes = {
  hide: PropTypes.bool.isRequired,
  selectHandler: PropTypes.func.isRequired,
};

export default CategoriesList;
