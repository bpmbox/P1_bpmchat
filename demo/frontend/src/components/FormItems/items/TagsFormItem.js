import React from 'react';
import PropTypes from 'prop-types';
import FormErrors from 'components/FormItems/formErrors';
import { FastField } from 'formik';
import CreatableSelect from 'react-select/creatable';
import { i18n } from 'i18n';

const TagsFormItem = (props) => {
  const {
    label,
    name,
    form,
    hint,
    errorMessage,
    required = true,
    placeholder,
    isClearable = true,
    notFoundContent,
  } = props;

  const handleChange = (data) => {
    form.setFieldTouched(name);
    if (!data || !data.length) {
      form.setFieldValue(name, undefined);
      return;
    }
    const commaSplittedValues = data
      .map((item) => item.value)
      .join(',')
      .split(',')

    form.setFieldValue(name, commaSplittedValues);
  };

  const value = () => {
    const value = form.values[name];
    if (!value || !value.length) {
      return [];
    }
    return value.map((item) => ({
      value: item,
      label: item,
    }));
  };

  const isInvalid = !!FormErrors.displayableError(
    form,
    name,
    errorMessage,
  );

  const controlStyles = isInvalid
    ? { control: (provided) => ({...provided, borderColor: 'red',}) }
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
          <CreatableSelect
            className="w-100"
            value={value()}
            onChange={handleChange}
            id={name}
            name={name}
            placeholder={placeholder || ''}
            isClearable={isClearable}
            styles={controlStyles}
            isMulti
            formatCreateLabel={(inputValue) => inputValue}
            loadingMessage={() =>
              i18n('autocomplete.loading')
            }
            noOptionsMessage={() => notFoundContent || ''}
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

TagsFormItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  hint: PropTypes.string,
  required: PropTypes.bool,
  errorMessage: PropTypes.string,
  mode: PropTypes.string,
  isClearable: PropTypes.bool,
  notFoundContent: PropTypes.string,
};

export default TagsFormItem;
