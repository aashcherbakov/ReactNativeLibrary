import {
  EDIT_BOOK
} from '../actions/types';

const INITIAL_STATE = {
  title: '',
  author: '',
  categories: '',
  publisher: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EDIT_BOOK: 
      return { ...state, [action.payload.prop]: [action.payload.value] };
    default:
      return state;
  }
};
