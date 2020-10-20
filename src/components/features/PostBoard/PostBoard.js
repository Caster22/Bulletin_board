import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostBoard.module.scss';
import { connect } from 'react-redux';
import { getAllPosts, fetchAllPosts } from '../../../redux/postsRedux';
import {fetchAllUsers, getAll} from '../../../redux/usersRedux';
import { AddPost } from '../AddPost/AddPost';


class Component extends React.Component {

  componentDidMount() {
    const { fetchPosts, fetchUsers } = this.props;
    fetchPosts();
    fetchUsers();
  }

  render() {
    const { postList } = this.props;

    const editDate = (date, date2) => {
      if (date === '' || date === undefined || date === null) {
        return date2;
      } else {
        return date;
      }
    };

    if (!postList.data) {
      return (
        <div className='text-center pt-5'>
          LOADING DATA...
        </div>
      );
    } else {
      return (
        <div className={styles.root}>
          <div className='container'>
            <AddPost />
            <div className={styles.board}>
              {postList.data.map(post => (
                <div key={post._id} className={`row mx-4 mb-4 mt-1 ${styles.background}`}>
                  <div className={`col-6 ${styles.border}`}>
                    <a href={`/post/${post._id}`} className={styles.title}>{post.title}</a>
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
                    Author: {post.creator.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }
  }
}


Component.propTypes = {
  postList: PropTypes.any,
  users: PropTypes.any,
  fetchPosts: PropTypes.func,
  fetchUsers: PropTypes.func,
};

const mapStateToProps = state => ({
  postList: getAllPosts(state),
  users: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchAllPosts()),
  fetchUsers: () => dispatch(fetchAllUsers()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as PostBoard,
  Container as PostBoard,
  Component as PostBoardComponent,
};
