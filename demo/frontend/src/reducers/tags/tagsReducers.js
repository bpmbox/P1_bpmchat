import list from 'reducers/tags/tagsListReducers';
import form from 'reducers/tags/tagsFormReducers';
import { combineReducers } from 'redux';

export default combineReducers({
  list,
  form,
});
