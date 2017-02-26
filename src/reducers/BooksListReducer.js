import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_FAILED,
  OPEN_BOOK,
  UPDATE_BOOK_SUCCESS,
  CREATE_BOOK_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  books: [],
  loading: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_BOOKS: 
      return { ...state, loading: true };
    case LOAD_BOOKS_SUCCESS:
      return { books: action.payload };
    case LOAD_BOOKS_FAILED: 
      return { ...state, loading: false, error: 'Error' };
    case OPEN_BOOK:
      return { ...state, openedBook: action.payload };
    case UPDATE_BOOK_SUCCESS: {
      const updatedList = updateList(state.books, action.payload);
      return { books: updatedList, openedBook: action.payload };
    }
    case CREATE_BOOK_SUCCESS: {
      const updatedList = updateList(state.books, action.payload);
      return { books: updatedList, createdBook: action.payload };
    }
    default:
      return state;
  }
};

const updateList = (books, newBook) => {
  const currentBooks = books;
  const bookToUpdate = currentBooks.find(book => book.id === newBook.id);
  if (bookToUpdate !== newBook) {
    const updatedBookIndex = currentBooks.indexOf(bookToUpdate);
    currentBooks[updatedBookIndex] = newBook;
    return currentBooks;
  }
  
  return books;
};
