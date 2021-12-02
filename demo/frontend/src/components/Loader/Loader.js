import React from 'react';
import cx from 'classnames';
import s from './Loader.module.scss';

const Loader = ({ size = 21, className }) => {
    return (
      <div className={cx(s.root, className)}>
          <i className="la la-spinner la-spin" style={{ fontSize: size }} />
      </div>
    );
};

export default Loader;
