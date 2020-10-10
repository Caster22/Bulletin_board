import React from 'react';
import PropTypes from 'prop-types';


const Button = ({ name }) => (
  <div>
    <button>{ name }</button>
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
