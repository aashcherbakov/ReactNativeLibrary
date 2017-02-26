import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import {
  MODIFY_BOOK_PROPERTY,
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILED,
  CREATE_BOOK,
  CREATE_BOOK_FAILED,
  CREATE_BOOK_SUCCESS,
  CLEAR_PROPERTIES
} from './types';
import { BASE_URL } from '../constants';

export const modifyBookProperty = ({ prop, value }) => ({
  type: MODIFY_BOOK_PROPERTY,
  payload: { prop, value }
});

export const clearProperties = () => ({ type: CLEAR_PROPERTIES });

export const updateBook = (book, updatedProps) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_BOOK });
    axios.put(`${BASE_URL}/${book.url}`, updatedProps)
      .then(updatedBook => {
        Actions.bookInfo({ type: 'back' });
        dispatch({ type: UPDATE_BOOK_SUCCESS, payload: updatedBook.data });
      })
      .catch(err => {
        dispatch({ type: UPDATE_BOOK_FAILED, payload: err });
      });
  };
};

export const createBook = (book) => {
  return (dispatch) => {
    dispatch({ type: CREATE_BOOK });
    axios.post(`${BASE_URL}/books`, book)
      .then(createdBook => {
        dispatch({ type: CREATE_BOOK_SUCCESS, payload: createdBook.data });
      })
      .catch(err => {
        dispatch({ type: CREATE_BOOK_FAILED, payload: err });
      });
  };
};
