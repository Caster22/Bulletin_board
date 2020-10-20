import React from 'react';
import PropTypes from 'prop-types';
import bullet from '../../../images/bullet.png';

import clsx from 'clsx';
import styles from './Header.module.scss';

import { connect } from 'react-redux';
import { getRank } from '../../../redux/usersRedux';

import Button from '../../common/Button/Button';

const userRank = 'user';


const changeBtn = rank => {
  if (rank === 'Not logged') return <Button type='Login' href='https://google.com' name='Login with Google'/>;
  else if (rank === 'user' || rank === 'admin') {
    return (
      <div className={styles.loginBtn}>
        <Button type='posts' href='/' name='My posts' />
        <Button type='logout' href='/' name='Logout' />
      </div>
    );
  }
};

const Component = ({ className }) => (
  <div className={clsx(className, styles.root)}>
    <div className={`row align-items-center ${styles.topBar} justify-content-between`}>
      <div className='col-8'>
        <div className={styles.title}>
          <a href='/' >Bullet in Board!</a>
          <div className={styles.image}>
            <img src={bullet} alt='bullet'/>
          </div>
        </div>
      </div>
      <div className={`col-3 ${styles.loginBtn}`}>
        {changeBtn(userRank)}
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rank: PropTypes.string,
};

const mapStateToProps = state => ({
  rank: getRank(state),
});

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as Header,
  Container as Header,
  Component as HeaderComponent,
};
