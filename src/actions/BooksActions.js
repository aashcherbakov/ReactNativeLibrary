import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS, 
  LOAD_BOOKS_FAILED,
  CHECKOUT_BOOK,
  CHECKOUT_SUCCESS,
  CHECKOUT_FAILED,
  OPEN_BOOK
} from './types';

const baseURL = 'https://guarded-retreat-23994.herokuapp.com';

export const loadBooks = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_BOOKS });
    axios.get(`${baseURL}/books`)
      .then(books => {
        dispatch({
          type: LOAD_BOOKS_SUCCESS,
          payload: books.data
        });
      })
      .catch(() => {
        dispatch({ type: LOAD_BOOKS_FAILED });
      });
  };
};

export const checkoutBook = () => {
  Actions.bookList({ type: 'back' });
  return { type: CHECKOUT_SUCCESS };
};

export const openBook = (book) => {
  Actions.bookInfo({ book });
  return { type: OPEN_BOOK, payload: book };
};
