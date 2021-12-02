import { FastField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';
import FormErrors from 'components/FormItems/formErrors';
import AsyncSelect from 'react-select/async';

const AUTOCOMPLETE_SERVER_FETCH_SIZE = 100;

const AutocompleteFormItem = (props) => {
  const {
    form,
    name,
    mapper,
    schema,
    fetchFn,
    hint,
    size,
    placeholder,
    autoFocus,
    inputProps,
    errorMessage,
    isClearable = true,
    mode = 'default',
    required = false,
  } = props;

  const { label } = schema[name];

  const valueOne = () => {
    if (form.values[name]) {
      return mapper.intoSelect(form.values[name])
    }
    return '';
  };

  const valueMultiple = () => {
    if (form.values[name]) {
      return form.values[name].map((value) => mapper.intoSelect(value))
    }
    return [];
  };

  const value = () => {
    return (mode === 'multiple')
      ? valueMultiple()
      : valueOne()
  };

  const handleSelectOne = (value) => {
    if (!value) {
      form.setFieldValue(name, '');
      return;
    }
    form.setFieldValue(name, mapper.intoValue(value));
  };

  const handleSelectMultiple = (values) => {
    if (!values) {
      form.setFieldValue(name, []);
      return;
    }

    form.setFieldValue(
      name,
      values.map((value) => mapper.intoValue(value))
    );
  }

  const handleSelect = (value) => {
    form.setFieldTouched(name);
    if (mode === 'multiple') {
      return handleSelectMultiple(value);
    } else {
      return handleSelectOne(value);
    }
  };

  const handleSearch = async (value) => {
    try {
      const results = await fetchFn(
        value,
        AUTOCOMPLETE_SERVER_FETCH_SIZE,
      );
      return results.map((result) => mapper.intoSelect(result));

    } catch (error) {
      console.error(error);
      return [];
    }
  }

  const sizeLabelClassName = {
    small: 'col-form-label-sm',
    large: 'col-form-label-lg',
  }[size] || '';

  const isInvalid = !!FormErrors.displayableError(
    form,
    name,
    errorMessage,
  );

  const controlStyles = isInvalid
    ? {
      control: (provided) => ({
        ...provided,
        borderColor: 'red',
      }),
    }
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
              } ${sizeLabelClassName}`}
              htmlFor={name}
            >
              {label}
            </label>
          )}
          <div style={{ display: 'flex' }}>
            <AsyncSelect
              className="w-100"
              styles={controlStyles}
              id={name}
              name={name}
              defaultOptions={true}
              isMulti={mode === 'multiple' ? true : false}
              loadOptions={handleSearch}
              placeholder={placeholder || ''}
              autoFocus={autoFocus || undefined}
              onChange={handleSelect}
              value={value()}
              isClearable={isClearable}
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

AutocompleteFormItem.propTypes = {
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  hint: PropTypes.string,
  autoFocus: PropTypes.bool,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isClearable: PropTypes.bool,
  inputProps: PropTypes.object,
  showCreate: PropTypes.bool,
  hasPermissionToCreate: PropTypes.bool,
};

export default AutocompleteFormItem;
