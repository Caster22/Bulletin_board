import React from 'react';
import PropTypes from 'prop-types';
import bullet from '../../../images/bullet.png';

import clsx from 'clsx';
import styles from './Header.module.scss';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import Button from '../../common/Button/Button';

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className='row align-items-center justify-content-between'>
      <div className='col-8'>
        <div className='row align-items-center'>
          <div className='col-7'>
            <h2 className={styles.title}>
              <a href='/' >Bullet in Board!</a>
            </h2>
          </div>
          <div className='col-3'>
            <div className={styles.image}>
              <img src={bullet} alt='bullet'/>
            </div>
          </div>
        </div>
      </div>
      <div className='col-4'>
        <Button name='Log In'/>
        <Button name='My posts'/>
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  // Container as Header,
  Component as HeaderComponent,
};
