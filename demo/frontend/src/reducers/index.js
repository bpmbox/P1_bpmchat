

import auth from 'reducers/auth';
import alerts from 'reducers/auth';
import navigation from 'reducers/navigation';
import layout from 'reducers/layout';
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import users from 'reducers/users/usersReducers';

import books from 'reducers/books/booksReducers';

import tags from 'reducers/tags/tagsReducers';

import table_4 from 'reducers/table_4/table_4Reducers';

import table_5 from 'reducers/table_5/table_5Reducers';


export default (history) =>
  combineReducers({
    router: connectRouter(history),
    layout,
    alerts,
    auth,
    navigation,
users,
books,
tags,
table_4,
table_5,

  });

