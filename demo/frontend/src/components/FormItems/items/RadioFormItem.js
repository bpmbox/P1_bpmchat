import React from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';

const RadioFormItem = (props) => {
  const {
    name,
    schema,
    hint,
    errorMessage,
    required = false
  } = props;

  const { label, options } = schema[name];

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

          {options.map((option) => (
            <div
              key={option.value}
              className="form-check form-check-inline"
            >
              <input
                className={`form-check-input ${FormErrors.validateStatus(
                  form,
                  name,
                  errorMessage,
                )}`}
                type="radio"
                id={`${name}-${option.value}`}
                name={`${name}-${option.value}`}
                value={option.value}
                checked={option.value === form.values[name]}
                onChange={(e) => {
                  form.setFieldValue(name, e.target.value);
                  form.setFieldTouched(name);
                }}
              />
              <label
                htmlFor={`${name}-${option.value}`}
                className="form-check-label"
              >
                {option.label}
              </label>
            </div>
          ))}

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

RadioFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  schema: PropTypes.object.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
};

export default RadioFormItem;
