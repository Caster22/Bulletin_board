import React from 'react';
import PropTypes from 'prop-types';

// import { connect } from 'react-redux';

import styles from './Post.module.scss';

const Component = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.container}>
        <div className='row'>
          <div className='col-12 border-bottom border-dark'>
            <div className='row'>
              <div className='col-6 text-left'>Added: Data</div>
              <div className='col-6 text-right'>Last Edit: Data</div>
            </div>
          </div>
          <div className='col-12 py-4 text-center'>
            <div className={styles.title}>TITLE</div>
          </div>
          <div className='col-12'>
            <div className={styles.description}>
              kupa description
            </div>
          </div>
          <div className='col-12'>
            <div className='row'>
              <div className='col-6 text-left'>
                Created by: AUTOR
              </div>
              <div className='col-6 text-right'>
                <button>Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Component.propTypes = {

};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Post,
  // Container as Post,
  Component as PostComponent,
};
