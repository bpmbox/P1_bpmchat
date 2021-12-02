import React, { useEffect } from 'react';
import Table_5Widget from 'pages/CRUD/Table_5/page/Table_5Widget';
import actions from 'actions/table_5/table_5FormActions';
import { connect } from 'react-redux';

const Table_5ViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <Table_5Widget
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

export default connect(mapStateToProps)(Table_5ViewPage);
