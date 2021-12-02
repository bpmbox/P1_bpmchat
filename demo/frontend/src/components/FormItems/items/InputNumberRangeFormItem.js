import React from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';

const InputNumberRangeFormItem = (props) => {
  const {
    label,
    name,
    form,
    hint,
    size,
    placeholder,
    autoFocus,
    autoComplete,
    inputProps,
    errorMessage,
    required = false,
  } = props;

  const value = () => {
    return form.values[name];
  }

  const startValue = () => {
    if (!value()) {
      return '';
    }
    if (Array.isArray(!value())) {
      return '';
    }
    if (!value().length) {
      return '';
    }

    return value()[0];
  };

  const endValue = () => {
    if (!value()) {
      return '';
    }
    if (Array.isArray(!value())) {
      return '';
    }
    if (value().length < 2) {
      return '';
    }

    return value()[1];
  };

  const handleStartChanged = (value) => {
    form.setFieldTouched(name);
    form.setFieldValue(name, [value, endValue()]);
  };

  const handleEndChanged = (value) => {
    form.setFieldTouched(name);
    form.setFieldValue(name, [startValue(), value]);
  };

  const sizeLabelClassName = {
    small: 'col-form-label-sm',
    large: 'col-form-label-lg',
  }[size] || '';

  const sizeInputClassName = {
    small: 'form-control-sm',
    large: 'form-control-lg',
  }[size] || '';

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
              } ${sizeLabelClassName}`}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <div
            style={{
              display: 'flex',
              flexWrap: 'nowrap',
              alignItems: 'baseline',
            }}
          >
            <input
              style={{ width: '100%' }}
              type="number"
              id={`${name}Start`}
              onChange={(event) =>
                handleStartChanged(event.target.value)
              }
              value={startValue()}
              placeholder={placeholder || undefined}
              autoFocus={autoFocus || undefined}
              autoComplete={autoComplete || undefined}
              className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
                form,
                name,
                errorMessage,
              )}`}
              {...inputProps}
            />

            <div
              style={{
                flexShrink: 1,
                marginLeft: '8px',
                marginRight: '8px',
              }}
            >
              ~
            </div>

            <input
              style={{ width: '100%' }}
              type="number"
              id={`${name}End`}
              onChange={(event) =>
                handleEndChanged(event.target.value)
              }
              value={endValue()}
              placeholder={placeholder || undefined}
              autoFocus={autoFocus || undefined}
              autoComplete={autoComplete || undefined}
              className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
                form,
                name,
                errorMessage,
              )}`}
              {...inputProps}
            />
          </div>
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


InputNumberRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  size: PropTypes.string,
  prefix: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

export default InputNumberRangeFormItem;
