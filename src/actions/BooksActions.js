import axios from 'axios';
import {
  LOAD_BOOKS  
} from './types';

const baseURL = 'https://guarded-retreat-23994.herokuapp.com';

export const loadBooks = () => {
  return (dispatch) => {
    axios.get(`${baseURL}/books`)
      .then(books => {
        dispatch({
          type: LOAD_BOOKS,
          payload: books.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };
};

