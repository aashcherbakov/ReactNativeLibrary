import axios from 'axios';
import {
  MODIFY_BOOK_PROPERTY,
  UPDATE_BOOK,
  UPDATE_BOOK_SUCCESS,
  UPDATE_BOOK_FAILED
} from './types';
import { BASE_URL } from '../constants';

export const modifyBookProperty = ({ prop, value }) => ({
  type: MODIFY_BOOK_PROPERTY,
  payload: { prop, value }
});

export const updateBook = (book, updatedProps) => {
  return (dispatch) => {
    dispatch({ type: UPDATE_BOOK });
    axios.put(`${BASE_URL}/${book.url}`, updatedProps)
      .then(updatedBook => {
        dispatch({ type: UPDATE_BOOK_SUCCESS, payload: updatedBook.data });
      })
      .catch(err => {
        dispatch({ type: UPDATE_BOOK_FAILED, payload: err });
      });
  };
};
