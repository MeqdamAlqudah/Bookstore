import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import classes from './Books.module.css';
import AddnewBook from './AddnewBook';
import { removeBook } from '../../redux/books/books';
import store from '../../redux/configureStore';

function Books() {
  const [isLoading, setIsLoading] = useState(true);
  const books = useSelector((state) => state.booksReducer);
  const getDataFromApi = 'getDataFromApi';
  const deleteHandler = (book) => {
    store.dispatch(removeBook(book));
  };
  useEffect(() => {
    setIsLoading(true);
    store.dispatch({ type: getDataFromApi });
    setIsLoading(false);
  }, []);
  if (isLoading) {
    return (<div>... Loading </div>);
  }
  return (
    <div>
      <form>
        <ul className={classes.ul}>
          {(books.length !== 0) ? books.map((book) => (
            <div className={classes.layout} key={uuidv4()}>
              <li>
                {book[0].title}
                {'\n '}
                -
                {' '}
                <span>{book[0].author ? book[0].author : ''}</span>
                {' '}
                <span>{book[0].category}</span>
              </li>
              <button type="button" onClick={() => deleteHandler(book)}>Remove</button>
            </div>
          )) : <li />}
        </ul>
      </form>
      <AddnewBook />
    </div>
  );
}

export default Books;
