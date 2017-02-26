import {
  MODIFY_BOOK_PROPERTY,
  CLEAR_PROPERTIES
} from '../actions/types';

const INITIAL_STATE = {
  title: null,
  author: null,
  categories: null,
  publisher: null
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MODIFY_BOOK_PROPERTY: 
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR_PROPERTIES:
      return INITIAL_STATE;
    default:
      return state;
  }
};
