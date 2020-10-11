import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.scss';

const Button = ({ name }) => (
  <div className={styles.button}>
    <a className={styles.link} href='/'>
      { name }
    </a>
  </div>
);

Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
