import {
  LOAD_BOOKS
} from '../actions/types';

const INITIAL_STATE = {
  books: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOAD_BOOKS:
      return { ...state, books: action.payload };
    default:
      return state;
  }
};
