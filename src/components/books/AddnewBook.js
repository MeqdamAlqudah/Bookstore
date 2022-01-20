import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import classes from './AddnewBook.module.css';
import CategoriesList from '../categories/CategorieList';
import { addBook } from '../../redux/books/books';
import store from '../../redux/configureStore';

function AddnewBook() {
  const [categoryButton, setCategoryButton] = useState('Category');
  const books = useSelector((state) => state.booksReducer);
  const [hide, setHide] = useState(false);
  const [categorie, setCategorie] = useState('');
  const bookTitle = useRef();
  const bookCategorie = useRef();
  const bookAuthor = useRef();
  const onClick = () => {
    setHide(!hide);
  };
  const onSubmit = () => {
    const title = bookTitle.current.value;
    const enteredCategorie = categorie;
    const author = bookAuthor.current.value;
    const id = `item${books.length + 1}`;
    const newBook = [{
      title, author, category: enteredCategorie, id,
    }];
    store.dispatch(addBook(newBook));
    setCategoryButton('Category');
    bookTitle.current.value = '';
    bookAuthor.current.value = '';
  };
  const selectHandler = (e) => {
    setCategoryButton(e.target.name);
    setCategorie(e.target.name);
    setHide(false);
  };
  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>ADD NEW BOOK</h1>
      <form className={classes.form}>
        <input type="text" name="add-book" placeholder="Book title" className={classes.input} ref={bookTitle} />
        <input type="text" name="add-book" placeholder="Author" className={classes.inputAuthor} ref={bookAuthor} />
        <button type="button" className={classes.addBook} onClick={onSubmit}>ADD BOOK</button>
      </form>
      <div className={classes.div}>
        <button type="button" className={classes.button} name="Category" onClick={onClick} ref={bookCategorie}>
          {categoryButton}
          {hide ? (
            <FaCaretUp className={
              classes.icon
            }
            />
          ) : (
            <FaCaretDown className={
              classes.icon
            }
            />
          )}

        </button>
        <CategoriesList hide={hide} selectHandler={selectHandler} />
      </div>
    </div>
  );
}

export default AddnewBook;
