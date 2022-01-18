import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import classes from './Books.module.css';
import AddnewBook from './AddnewBook';
import { removeBook } from '../../redux/books/books';
import store from '../../redux/configureStore';

function Books() {
  const books = useSelector((state) => state.booksReducer);
  const deleteHandler = (book) => {
    store.dispatch(removeBook(book));
  };
  return (
    <div>
      <form>
        <ul className={classes.ul}>
          {books.map((book) => (
            <div className={classes.layout} key={uuidv4()}>
              <li>
                {book.title}
                {'\n '}
                -
                {' '}
                <span>{book.author}</span>
              </li>
              <button type="button" onClick={() => deleteHandler(book)}>Remove</button>
            </div>
          ))}
        </ul>
      </form>
      <AddnewBook />
    </div>
  );
}

export default Books;
