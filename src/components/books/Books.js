import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { CircularProgressbar } from 'react-circular-progressbar';
import { useEffect, useState } from 'react';
import ProgressProvider from './ProgressProvider';
import 'react-circular-progressbar/dist/styles.css';
import classes from './Books.module.css';
import AddnewBook from './AddnewBook';
import { removeBook } from '../../redux/books/books';
import store from '../../redux/configureStore';

function Books() {
  const [isLoading, setIsLoading] = useState(true);
  const books = useSelector((state) => state.booksReducer);
  const generator = () => Math.floor(Math.random() * 100);
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
    <div className={classes.container}>
      <form>
        <ul className={classes.ul}>
          {(books.length !== 0) ? books.map((book) => (
            <div className={classes.layout} key={uuidv4()}>
              <li className={classes.book}>
                <span className={classes.category}>{book[0].category}</span>
                <span className={classes.title}>{book[0].title}</span>
                {' '}
                <span className={classes.author}>{book[0].author ? book[0].author : ''}</span>
                {' '}
                <button className={classes.removeButton} type="button" onClick={() => deleteHandler(book)}>Remove</button>
              </li>

              <ProgressProvider valueStart={0} valueEnd={generator}>
                {(value) => (
                  <div className={classes.progress}>
                    {' '}
                    <CircularProgressbar value={value} />
                    <span className={classes.percentage}>
                      {value}
                      %
                      <br />
                      <span className={classes.text}>Completed</span>
                    </span>
                  </div>
                )}
              </ProgressProvider>
              <div className={classes.UpdateProgress}>
                <span>CURRENT CHAPTER</span>
                <span className={classes.updateCurrentChapter}>Chapter 17</span>
                <button type="button">UPDATE PROGRESS</button>
              </div>
            </div>
          )) : <li />}
        </ul>
      </form>
      <AddnewBook />
    </div>
  );
}

export default Books;
