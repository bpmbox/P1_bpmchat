import React, { useEffect } from 'react';
import UsersWidget from 'pages/CRUD/Users/page/UsersWidget';
import actions from 'actions/users/usersFormActions';
import { connect } from 'react-redux';

const UsersViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <UsersWidget
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

export default connect(mapStateToProps)(UsersViewPage);
