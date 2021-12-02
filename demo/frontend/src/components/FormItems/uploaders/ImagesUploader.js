import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import FileUploader from 'components/FormItems/uploaders/UploadService';
import Errors from 'components/FormItems/error/errors';
import ImagesUploaderWrapper from 'components/FormItems/style/ImagesUploaderWrapper';

const ImagesUploader = (props) => {
  const {
    value,
    onChange,
    schema,
    path,
    max,
    readonly,
  } = props;

  const [loading, setLoading] = useState(false);
  const [, setImageMeta] = useState({
    imageSrc: null,
    imageAlt: null,
  })
  const inputElement = useRef(null);

  const valuesArr = () => {
    if (!value) {
      return []
    }
    return Array.isArray(value) ? value : [value];
  }

  const fileList = () => {
    return valuesArr().map((item) => ({
      uid: item.id || undefined,
      name: item.name,
      status: 'done',
      url: item.publicUrl,
    }));
  };

  const handleRemove = (id) => {
    onChange(valuesArr().filter((item) => item.id !== id))
  }

  const handleChange = async (event) => {
    try {
      const files = event.target.files;

      if (!files || !files.length) {
        return;
      }

      let file = files[0];

      FileUploader.validate(file, schema);

      setLoading(true)

      file = await FileUploader.upload(
        path,
        file,
        schema,
      );

      inputElement.current.value = '';
      setLoading(false);
      onChange([...valuesArr(), file]);
    } catch (error) {
      inputElement.current.value = '';
      console.log('error', error);
      setLoading(false);
      Errors.showMessage(error);
    }
  };

  const doPreviewImage = (image) => {
    setImageMeta({
      imageSrc: image.publicUrl,
      imageAlt: image.name
    });
  };

  const doCloseImageModal = () => {
    setImageMeta({
      imageSrc: null,
      imageAlt: null,
    });
  };

  const uploadButton = (
    <label
      className="btn btn-outline-secondary px-4 mb-2"
      style={{ cursor: 'pointer' }}
    >
      {'Upload an image'}
      <input
        style={{ display: 'none' }}
        disabled={loading || readonly}
        accept="image/*"
        type="file"
        onChange={handleChange}
        ref={inputElement}
      />
    </label>
  )

  return (
    <ImagesUploaderWrapper>
      {readonly || (max && fileList().length >= max)
        ? null
        : uploadButton}

      {valuesArr() && valuesArr().length ? (
        <div className="d-flex flex-row flex-wrap">
          {valuesArr().map((item) => {
            return (
              <div
                className="mr-2 mb-2 img-card"
                style={{ height: '100px' }}
                key={item.id}
              >
                <img
                  alt={item.name}
                  src={item.publicUrl}
                  className="img-thumbnail"
                  style={{
                    width: '100px',
                    height: '100px',
                    objectFit: 'cover',
                  }}
                />

                <div className="img-buttons rounded-bottom">
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => doPreviewImage(item)}
                  >
                    <i className="la la-search"></i>
                  </button>
                  {!readonly && (
                    <button
                      type="button"
                      className="btn btn-link ml-2"
                      onClick={() => handleRemove(item.id)}
                    >
                      <i className="la la-times"></i>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : null }
    </ImagesUploaderWrapper>
  );

}

ImagesUploader.propTypes = {
  readonly: PropTypes.bool,
  path: PropTypes.string,
  max: PropTypes.number,
  schema: PropTypes.shape({
    image: PropTypes.bool,
    size: PropTypes.number,
    formats: PropTypes.arrayOf(PropTypes.string),
  }),
  value: PropTypes.any,
  onChange: PropTypes.func,
};

export default ImagesUploader;
