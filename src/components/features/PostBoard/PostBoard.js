import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostBoard.module.scss';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { getAll } from '../../../redux/usersRedux';
import { AddPost } from '../AddPost/AddPost';

const editDate = (date, date2) => {
  if (date === '' || date === undefined || date === null) {
    return date2;
  } else {
    return date;
  }
};

class Component extends React.Component {
  render() {
    const { postList, users } = this.props;

    const userName = id => {
      const filteredUser =  users.filter(user => user.id === id);
      return filteredUser[0].name;
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <AddPost />
          <div className={styles.board}>
            { postList.map(post => (
              <div key={post.id} className={`row mx-4 mb-4 mt-1 ${styles.background}`}>
                <div className={`col-6 ${styles.border}`}>
                  <a href='/' className={styles.title}>{post.title}</a>
                </div>
                <div className={`col-3 text-center ${styles.border}`}>
                  <div>Last Edit:</div>
                  {editDate(post.editDate, post.creationDate)}
                </div>
                <div className={`col-3 text-center ${styles.border}`}>
                  <div>Added:</div>
                  {post.creationDate}
                </div>
                <div className={`col-6 ${styles.border}`}>
                  {post.shortDesc}
                </div>
                <div className={`col-6 text-center ${styles.border}`}>
                  Author: {userName(post.creatorId)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}


Component.propTypes = {
  postList: PropTypes.array,
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  postList: getAllPosts(state),
  users: getAll(state),
});

const Container = connect(mapStateToProps)(Component);

export {
  //Component as PostBoard,
  Container as PostBoard,
  Component as PostBoardComponent,
};
