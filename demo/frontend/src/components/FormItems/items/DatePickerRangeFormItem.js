import React from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'view/shared/form/formErrors';
import { FastField } from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DatePickerRangeFormItem = (props) => {
  const {
    name,
    schema,
    form,
    hint,
    size,
    placeholder,
    autoFocus,
    autoComplete,
    inputProps,
    errorMessage,
    required = false,
    showTimeInput,
  } = props;

  const { label } = schema[name];

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

    return value()[0] || '';
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

    return value()[1] || '';
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
            <DatePicker
              id={`${name}Start`}
              onChange={(value) =>
                handleStartChanged(value)
              }
              selected={startValue()}
              className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
                form,
                name,
                errorMessage,
              )}`}
              showTimeInput={showTimeInput}
              popperModifiers={{
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: 'viewport',
                },
              }}
              placeholderText={placeholder || ''}
              autoFocus={autoFocus || undefined}
              autoComplete={autoComplete || undefined}
              dateFormat={
                showTimeInput
                  ? 'yyyy-MM-dd HH:mm'
                  : 'yyyy-MM-dd'
              }
              timeIntervals={15}
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

            <DatePicker
              id={`${name}End`}
              onChange={(value) =>
                handleEndChanged(value)
              }
              selected={endValue()}
              className={`form-control ${sizeInputClassName} ${FormErrors.validateStatus(
                form,
                name,
                errorMessage,
              )}`}
              showTimeInput={showTimeInput}
              placeholderText={placeholder || ''}
              autoFocus={autoFocus || undefined}
              autoComplete={autoComplete || undefined}
              dateFormat={
                showTimeInput
                  ? 'yyyy-MM-dd HH:mm'
                  : 'yyyy-MM-dd'
              }
              timeIntervals={15}
              popperModifiers={{
                preventOverflow: {
                  enabled: true,
                  escapeWithReference: false,
                  boundariesElement: 'viewport',
                },
              }}
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

DatePickerRangeFormItem.propTypes = {
  name: PropTypes.string.isRequired,
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

export default DatePickerRangeFormItem;
