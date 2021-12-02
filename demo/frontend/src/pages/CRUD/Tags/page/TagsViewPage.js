import React, { useEffect } from 'react';
import TagsWidget from 'pages/CRUD/Tags/page/TagsWidget';
import actions from 'actions/tags/tagsFormActions';
import { connect } from 'react-redux';

const TagsViewPage = (props) => {

  const { dispatch, match, loading, record } = props;

  useEffect(() => {
    dispatch(actions.doFind(match.params.id))
  }, [match]);

  return (
    <React.Fragment>
      <TagsWidget
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

export default connect(mapStateToProps)(TagsViewPage);
