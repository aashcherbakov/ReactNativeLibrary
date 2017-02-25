import { combineReducers } from 'redux';
import BooksReducer from './BooksListReducer';
import BooksEditReducer from './BookEditReducer';

export default combineReducers({
  booksList: BooksReducer,
  bookEdit: BooksEditReducer
});
