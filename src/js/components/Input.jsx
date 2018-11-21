import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  disabled, handleChange, label, maxLength, name, placeholder, required, type, value,
}) => (
  <div className="input">
    <label className="input__label" htmlFor={name}>
      {label}
      <input
        aria-label={label}
        aria-required={required}
        className="input__element"
        disabled={disabled}
        id={name}
        maxLength={maxLength}
        name={name}
        onChange={handleChange}
        placeholder={placeholder}
        required={required}
        type={type}
        value={value}
      />
    </label>
  </div>
);

Input.propTypes = {
  disabled: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Input.defaultProps = {
  disabled: false,
  maxLength: 254,
  required: false,
};

export default Input;
