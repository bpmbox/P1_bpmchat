
import axios from 'axios';
import React, { Component } from 'react';
import AutocompleteFormItem from 'components/FormItems/items/AutocompleteFormItem';
import { connect } from 'react-redux';

  async function selectList(query, limit) {
  const params = { query, limit };
  const response = await axios.get(`/tags/autocomplete`, { params });
  return response.data;
  }

  const TagsSelectItem = (props) => {
  const fetchToItem = (value, limit) => {
  return selectList(value, limit);
  };

  const mapper = {
  intoSelect(originalValue) {
  if (!originalValue) {
  return undefined;
  }

  const value = originalValue.id;
  let label = originalValue.label ? originalValue.label : originalValue.name;

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
    hasPermissionToCreate: state.tags.hasPermissionToCreate
  });

  export default connect(select)(TagsSelectItem);
