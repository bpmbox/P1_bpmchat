import list from 'reducers/table_5/table_5ListReducers';
import form from 'reducers/table_5/table_5FormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
