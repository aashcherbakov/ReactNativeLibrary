import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_FAILED,
  OPEN_BOOK,
  UPDATE_BOOK_SUCCESS
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
    case UPDATE_BOOK_SUCCESS: 
      return { ...state, openedBook: action.payload };
    default:
      return state;
  }
};
