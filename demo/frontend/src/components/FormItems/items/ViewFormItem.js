import React from 'react';
import PropTypes from 'prop-types';
import { FastField } from 'formik';

const ViewFormItem = (props) => {
  const {
    label,
    name,
  } = props;

  return (
    <FastField
      name={name}
    >
      {({ form }) => (
        <div className="form-group">
          <label className="col-form-label" htmlFor={name}>
            {label}
          </label>
          <input
            type="text"
            readOnly
            className="form-control-plaintext"
            id={name}
            value={form.values[name]}
          />
        </div>
      )}
    </FastField>
  );
}

ViewFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default ViewFormItem;
