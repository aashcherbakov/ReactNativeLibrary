import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS, 
  LOAD_BOOKS_FAILED,
  CHECKOUT_SUCCESS,
  OPEN_BOOK
} from './types';
import { BASE_URL } from '../constants';

export const loadBooks = () => {
  return (dispatch) => {
    dispatch({ type: LOAD_BOOKS });
    axios.get(`${BASE_URL}/books`)
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
