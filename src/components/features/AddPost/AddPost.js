import React from 'react';
import styles from './AddPost.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import { getRank } from '../../../redux/usersRedux';
import PropTypes from 'prop-types';

const userRank = 'user';

const isLogged = rank => {
  if (rank === 'user' || rank === 'admin') {
    return (
      <div className={styles.new}>
        <a className={styles.btn} href='/post/add'>
          Add New
          <FontAwesomeIcon className={styles.icon} icon={faPlus} />
        </a>
      </div>
    );
  } else return null;
};

const Component = ({ rank }) => (
  <div className={styles.root}>
    <h2 className={styles.title}>Posts:</h2>
    {isLogged(userRank)}
  </div>
);

Component.propTypes = {
  rank: PropTypes.string,
};

const mapStateToProps = state => ({
  rank: getRank(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as AddPost,
  Container as AddPost,
  Component as AddPostContainer,
};

