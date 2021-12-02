import React, { useEffect } from 'react';
import Table_4Widget from 'pages/CRUD/Table_4/page/Table_4Widget';
import actions from 'actions/table_4/table_4FormActions';
import { connect } from 'react-redux';

const Table_4ViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Table_4Widget
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

export default connect(mapStateToProps)(Table_4ViewPage);
