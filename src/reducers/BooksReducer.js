import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS,
  LOAD_BOOKS_FAILED
} from '../actions/types';

const INITIAL_STATE = {
  books: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_BOOKS: 
      return { ...state, loading: true };
    case LOAD_BOOKS_SUCCESS:
      return { ...state, loading: false, books: action.payload };
    case LOAD_BOOKS_FAILED: 
      return { ...state, loading: false, error: 'Error' };
    default:
      return state;
  }
};
