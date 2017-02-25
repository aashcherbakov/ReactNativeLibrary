import {
  MODIFY_BOOK_PROPERTY
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  author: '',
  categories: '',
  publisher: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_BOOK_PROPERTY: 
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
