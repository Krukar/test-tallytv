import React from 'react';
import PropTypes from 'prop-types';

import Input from 'Components/Input';

const Form = ({
  button, fields, handleSubmit,
}) => {
  const inputs = fields.map(input => <Input key={input.name} {...input} />);

  return (
    <form className="form" onSubmit={handleSubmit}>
      {inputs}
      <button type="submit">{button}</button>
    </form>
  );
};

Form.propTypes = {
  button: PropTypes.string.isRequired,
  fields: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default Form;
