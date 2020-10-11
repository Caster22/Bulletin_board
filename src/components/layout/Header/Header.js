import React from 'react';
import PropTypes from 'prop-types';
import bullet from '../../../images/bullet.png';

import clsx from 'clsx';
import styles from './Header.module.scss';

import { connect } from 'react-redux';
import { getRank } from '../../../redux/usersRedux';

import Button from '../../common/Button/Button';
import { SelectRank } from '../../features/SelectRank';


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

const Component = ({ className, rank }) => (
  <div className={clsx(className, styles.root)}>
    <div className={`row align-items-center ${styles.topBar} justify-content-between`}>
      <div className='col-8'>
        <div className={styles.title}>
          <a href='/' >Bullet in Board!</a>
          <div className={styles.image}>
            <img src={bullet} alt='bullet'/>
          </div>
        </div>
        <SelectRank/>
      </div>
      <div className={`col-3 ${styles.loginBtn}`}>
        {changeBtn(rank)}
      </div>
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  rank: PropTypes.string.isRequired,
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
