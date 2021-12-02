
import axios from 'axios';
import React, { Component } from 'react';
import AutocompleteFormItem from 'components/FormItems/items/AutocompleteFormItem';
import { connect } from 'react-redux';

  async function selectList(query, limit) {
  const params = { query, limit };
  const response = await axios.get(`/table_4/autocomplete`, { params });
  return response.data;
  }

  const Table_4SelectItem = (props) => {
  const fetchToItem = (value, limit) => {
  return selectList(value, limit);
  };

  const mapper = {
  intoSelect(originalValue) {
  if (!originalValue) {
  return undefined;
  }

  const value = originalValue.id;
  let label = originalValue.label ? originalValue.label : originalValue.newColumn;

  return {
  key: value,
  value,
  label,
  };
  },

  intoValue(originalValue) {
  if (!originalValue) {
  return undefined;
  }

  return {
  id: originalValue.value,
  label: originalValue.label,
  };
  },
  };

  const {
    form,
    ...rest
  } = props;

  return (
    <React.Fragment>
      <AutocompleteFormItem
        {...rest}
        fetchFn={fetchToItem}
        mapper={mapper}
        form={form}
      />
    </React.Fragment>
  );
}

  const select = (state) => ({
    hasPermissionToCreate: state.table_4.hasPermissionToCreate
  });

  export default connect(select)(Table_4SelectItem);
