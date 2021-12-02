import list from 'reducers/table_4/table_4ListReducers';
import form from 'reducers/table_4/table_4FormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
