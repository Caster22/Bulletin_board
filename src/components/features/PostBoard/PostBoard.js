import React from 'react';
import PropTypes from 'prop-types';

import styles from './PostBoard.module.scss';
import { connect } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { getAll } from '../../../redux/usersRedux';

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
          Board
          <div className={styles.board}>
            { postList.map(post => (
              <div key={post.id} className={`row p-4 `}>
                <div className={`col-6 ${styles.border} ${styles.title}`}>
                  {post.title}
                </div>
                <div className={`col-3 text-center ${styles.border}`}>
                  {editDate(post.editDate, post.creationDate)}
                </div>
                <div className={`col-3 text-center ${styles.border}`}>
                  {post.creationDate}
                </div>
                <div className={`col-6 ${styles.border}`}>
                  {post.description}
                </div>
                <div className={`col-6 text-center ${styles.border}`}>
                  {userName(post.creatorId)}
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
