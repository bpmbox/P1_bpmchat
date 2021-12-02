import PropTypes from 'prop-types';
import React from 'react';
import ImagesUploader from 'components/FormItems/uploaders/ImagesUploader';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';

const ImagesFormItem = (props) => {
  const {
    name,
    schema,
    hint,
    path,
    fileProps,
    max = undefined,
    inputProps,
    required = false,
  } = props;

  const { label } = schema[name];

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
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <br />
          <ImagesUploader
            path={path}
            schema={fileProps}
            value={form.values[name]}
            onChange={(value) => {
              form.setFieldValue(name, value);
              form.setFieldTouched(name);
            }}
            max={max}
            {...inputProps}
          />

          <div className="invalid-feedback">
            {FormErrors.displayableError(form, name)}
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

ImagesFormItem.propTypes = {
  path: PropTypes.string.isRequired,
  required: PropTypes.bool,
  // form: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  formItemProps: PropTypes.object,
  inputProps: PropTypes.object,
};

export default ImagesFormItem;
