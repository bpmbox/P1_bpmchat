import PropTypes from 'prop-types';
import React from 'react';

const TextViewItem = (props) => {
  const { value, prefix, label } = props;

  if (!value && value !== 0 && value !== false) {
    return null;
  }

  const inputValue = `${prefix ? `${prefix} ` : ''}${value}`;

  return (
    <div className="form-group">
      <label className="col-form-label">
        {label}
      </label>

      <input
        type="text"
        readOnly
        className="form-control-plaintext"
        value={inputValue}
      />
    </div>
  );
}

TextViewItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.any,
  prefix: PropTypes.string,
};

export default TextViewItem;
