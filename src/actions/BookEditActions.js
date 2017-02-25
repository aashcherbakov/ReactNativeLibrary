import {
  EDIT_BOOK
} from './types';

export const editBook = ({ prop, value }) => ({
  type: EDIT_BOOK,
  payload: { prop, value }
});
