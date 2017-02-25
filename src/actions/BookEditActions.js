import { Actions } from 'react-native-router-flux';
import {
  MODIFY_BOOK_PROPERTY
} from './types';

export const modifyBookProperty = ({ prop, value }) => ({
  type: MODIFY_BOOK_PROPERTY,
  payload: { prop, value }
});

export const editBook = (book) => {
  Actions.editBook({ book });
  return { type: 'edit_book' };
};
