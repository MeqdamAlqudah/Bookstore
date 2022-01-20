const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const fetchData = 'bookStore/books/fetchBooks';

// const getCurrentBooks = 'GET_CURRENT_Books';

const initialState = [];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const getBooks = (payload) => ({
  type: fetchData,
  payload,
});

// books.js
let counter = 0;
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      /*
      return a new state object in which the
      books array will contain a new book object, passed by action.payload.
      Remember -  you MUSN'T mutate the state. You have to return a new state object - i.e.:
      return [ ...state, action.payload];
      */
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload.id);
    case fetchData:
      return [...state, ...Object.values(action.payload).map((el) => {
        counter += 1;
        return { ...el, id: `item${counter}` };
      })];
    default:
      return state;
  }
};

export default reducer;
