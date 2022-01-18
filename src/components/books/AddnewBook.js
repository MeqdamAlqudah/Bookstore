import { FaCaretDown, FaCaretUp } from 'react-icons/fa';
import { useState, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classes from './AddnewBook.module.css';
import CategoriesList from '../categories/CategorieList';
import { addBook } from '../../redux/books/books';
import store from '../../redux/configureStore';

function AddnewBook() {
  const [categoryButton, setCategoryButton] = useState('Category');
  const [hide, setHide] = useState(false);
  const [categorie, setCategorie] = useState('');
  const bookTitle = useRef();
  const bookCategorie = useRef();
  const onClick = () => {
    setHide(!hide);
  };
  const onSubmit = () => {
    const title = bookTitle.current.value;
    const enteredCategorie = categorie;
    const id = uuidv4();
    const newBook = { title, enteredCategorie, id };
    store.dispatch(addBook(newBook));
    setCategoryButton('Category');
    bookTitle.current.value = '';
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
        <button type="button" className={classes.addBook} onClick={onSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddnewBook;