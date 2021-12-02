import React from 'react';
import PropTypes from 'prop-types';
import s from './ColorPicker.module.scss';

const CustomColorPicker = (props) => {
  const { colors, activeColor, updateColor, customizationItem } = props;

  if(customizationItem === 'navbar') {
    return (
      <div>
        <ul className={s.colorsList}>
          {Object.entries(colors).map(color => {
            return (
              <li
                key={color[1]}
                className={`${s.colorBox} ${(activeColor === color[1]) ? s.active : ""}`}
                style={{ background: color[1] }}
                onClick={() => updateColor(color[1])}
              />
            )
          })}
        </ul>
      </div>
    )
  } else if (customizationItem === 'theme') {
    return (
      <div>
        <ul className={s.colorsList}>
          {Object.entries(colors).map(color => {
            return (
              <li
                key={color[1]}
                className={`${s.colorBox} ${(activeColor === color[0]) ? s.activeThemeColor : ""}`}
                style={{ background: color[1] }}
                onClick={() => updateColor(color[0])}
              />
            )
          })}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <ul className={s.colorsList}>
          {Object.entries(colors).map(color => {
            return (
              <li
                key={color[1]}
                className={`${s.colorBox} ${(activeColor === color[0]) ? s.active : ""}`}
                style={{ background: color[1] }}
                onClick={() => updateColor(color[0])}
              />
            )
          })}
        </ul>
      </div>
    )
  }
}

CustomColorPicker.propTypes = {
  colors: PropTypes.object,
  activeColor: PropTypes.string,
  updateColor: PropTypes.func,
  customizationItem: PropTypes.string,
};

export default CustomColorPicker
