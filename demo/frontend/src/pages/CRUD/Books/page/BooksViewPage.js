import React, { useEffect } from 'react';
import BooksWidget from 'pages/CRUD/Books/page/BooksWidget';
import actions from 'actions/books/booksFormActions';
import { connect } from 'react-redux';

const BooksViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <BooksWidget
        loading={loading}
        record={record}
      />
    </React.Fragment>
  );
}

function mapStateToProps(store) {
  return {
    loading: store.users.form.loading,
    record: store.users.form.record,
  };
}

export default connect(mapStateToProps)(BooksViewPage);
