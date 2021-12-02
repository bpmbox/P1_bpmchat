import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';
import Select from 'react-select';

const SelectFormItem = (props) => {
  const {
    schema,
    form,
    name,
    hint,
    errorMessage,
    required = false,
    placeholder,
    isClearable = true,
  } = props;

  const { label, options } = schema[name];

  const value = () => {
    if (form.values[name]) {
      return options.find((option) => option.value === form.values[name])
    }
    return '';
  }

  const handleSelect = (data) => {
    form.setFieldTouched(name);

    if (!data) {
      form.setFieldValue(name, undefined);
      return;
    }

    form.setFieldValue(name, data.value);
  }

  const isInvalid = !!FormErrors.displayableError(
    form,
    name,
    errorMessage,
  );

  const controlStyles = isInvalid
    ? { control: (provided) => ({ ...provided, borderColor: 'red'}) }
    : undefined;

  return (
    <FastField
      name={name}
    >
      {({ form }) => (
        <div className="form-group">
          {!!label && (
            <label
              className={`col-form-label ${
                required ? 'required' : null
              }`}
            >
              {label}
            </label>
          )}
          <br />
          <Select
            className="w-100"
            value={value()}
            onChange={handleSelect}
            id={name}
            name={name}
            options={options}
            isMulti={false}
            placeholder={placeholder || ''}
            isClearable={isClearable}
            styles={controlStyles}
            loadingMessage={'Loading'}
            noOptionsMessage={'No options'}
          />

          <div className="invalid-feedback">
            {FormErrors.displayableError(
              form,
              name,
              errorMessage,
            )}
          </div>

          {!!hint && (
            <small className="form-text text-muted">
              {hint}
            </small>
          )}
        </div>
      )}
    </FastField>
  )
}

SelectFormItem.propTypes = {
  form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
};

export default SelectFormItem;
