import { FastField } from 'formik';
import PropTypes from 'prop-types';
import React, { useEffect, useState} from 'react';
import FormErrors from 'view/shared/form/formErrors';
import Select from 'react-select';

const AutocompleteInMemoryFormItem = (props) => {
  const {
    form,
    label,
    name,
    mapper,
    fetchFn,
    hint,
    size,
    placeholder,
    autoFocus,
    inputProps,
    errorMessage,
    showCreate,
    hasPermissionToCreate,
    mode = 'default',
    required = false,
    isClearable = true,
  } = props;

  const [fullDataSource, setFullDataSource] = useState([])
  const [loading, setLoading] = useState(false);

  const valueOne = () => {
    if (form.values[name]) {
      return mapper.toAutocomplete(form.values[name]);
    }
    return '';
  }

  const valueMultiple = () => {
    if (form.values[name]) {
      return form.values[name].map((value) => mapper.toAutocomplete(value));
    }
    return [];
  }

  const value = () => {
    if (mode === 'multiple') {
      return valueMultiple();
    } else {
      return valueOne();
    }
  }

  const handleSelectOne = (value) => {
    if (!value) {
      form.setFieldValue(name, '');
      return;
    }
    form.setFieldValue(name, mapper.toValue(value))
  }

  const handleSelectMultiple = (values) => {
    if (!values) {
      form.setFieldValue(name, []);
      return;
    }
    form.setFieldValue(
      name,
      values.map((value) => mapper.toValue(value))
    );
  };

  const handleSelect = (value) => {
    form.setFieldTouched(name);
    if (mode === 'multiple') {
      return handleSelectMultiple(value);
    } else {
      return handleSelectOne(value);
    }
  };

  const fetchAllResults = async () => {
    setLoading(true);
    try {
      let fullDataSource = await fetchFn();
      fullDataSource = fullDataSource.map((data) => mapper.toAutocomplete(data));
      setFullDataSource([...fullDataSource]);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setFullDataSource([]);
      setLoading(false);
      return [];
    }
  };

  const options = () => {
    // MEANINGLESS FUNCTION
    setFullDataSource([...options]);
    if (!options) {
      return [];
    }
    if (value()) {
      if (mode === 'multiple') {
        return [...value(), ...options];
      } else {
        return [...value(), ...options];
      }
    }
    return options;
  }

  useEffect(() => {
    async function processData() {
      await fetchAllResults();
    }
    processData();
  }, []);

  const hintOrLoading = loading
    ? 'Loading'
    : hint;

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
    ? { control: (provided) => ({ ...provided, borderColor: 'red' }) }
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
            <Select
              className="w-100"
              styles={controlStyles}
              id={name}
              name={name}
              isMulti={mode === 'multiple' ? true : false}
              placeholder={placeholder || ''}
              autoFocus={autoFocus || undefined}
              onChange={handleSelect}
              value={value()}
              isClearable={isClearable}
              options={options()}
              loadingMessage={() =>
                i18n('autocomplete.loading')
              }
              noOptionsMessage={() =>
                i18n('autocomplete.noOptions')
              }
              {...inputProps}
            />

            {showCreate && hasPermissionToCreate ? (
              <button
                style={{ marginLeft: '16px' }}
                className="btn btn-primary"
                type="button"
                onClick={tonOpenModal}
              >
                <i className="fas fa-plus"></i>
              </button>
            ) : null}
          </div>
          <div className="invalid-feedback">
            {FormErrors.displayableError(
              form,
              name,
              errorMessage,
            )}
          </div>
          {!!hintOrLoading && (
            <small className="form-text text-muted">
              {hintOrLoading}
            </small>
          )}
        </div>
      )}
    </FastField>
  )
}

AutocompleteInMemoryFormItem.propTypes = {
  form: PropTypes.object.isRequired,
  fetchFn: PropTypes.func.isRequired,
  mapper: PropTypes.object.isRequired,
  required: PropTypes.bool,
  mode: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
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

export default AutocompleteInMemoryFormItem;
