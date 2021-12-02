import list from 'reducers/books/booksListReducers';
import form from 'reducers/books/booksFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
