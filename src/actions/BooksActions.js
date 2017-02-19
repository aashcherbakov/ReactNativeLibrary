import axios from 'axios';
import {
  LOAD_BOOKS,
  LOAD_BOOKS_SUCCESS, 
  LOAD_BOOKS_FAILED  
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

