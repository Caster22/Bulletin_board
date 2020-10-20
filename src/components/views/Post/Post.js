import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getPostById, fetchSelectedPost } from '../../../redux/postsRedux';
import { getUserById, getLoggedUser, getRank } from '../../../redux/usersRedux';

import styles from './Post.module.scss';

class Component extends React.Component {
  componentDidMount = () => {
    const { selectedPost } = this.props;

    selectedPost(this.props.match.params.id);
  }

  statusRender = status => (
    <p>Status: <span>{ status }</span></p>
  );

  render() {
    const { selectedPost, postAuthor, loggedUser, rank } = this.props;

    const editBtn = () => {
      if (loggedUser === postAuthor.id || rank === 'admin') {
        return (
          <div className={styles.new}>
            <a className={styles.btn} href={`/post/${selectedPost.id}/edit`}>
              Edit Post
            </a>
          </div>
        );
      }
    };

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.container}>
            <div className='row'>
              <div className='col-12 pb-3 border-bottom border-dark'>
                <div className='row'>
                  <div className='col-6 text-left'>Added: {selectedPost.creationDate}</div>
                  <div className='col-6 text-right'>Last Edit: {selectedPost.editDate}</div>
                </div>
              </div>
              <div className='col-12 py-4 text-center'>
                <div className={styles.title}>{selectedPost.title}</div>
              </div>
              <div className='col-12 pb-4'>
                <div className={styles.description}>
                  {selectedPost.description}
                </div>
              </div>
              <div className='col-12 border-top border-dark'>
                <div className='row py-3 '>
                  <div className='col-6  text-left'>
                    Created by: { postAuthor.name }
                  </div>
                  <div className='col-6 text-right'>
                    {editBtn()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  selectedPost: PropTypes.object.isRequired,
  postAuthor: PropTypes.object.isRequired,
  loggedUser: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  match: PropTypes.any,
};

const mapStateToProps = (state, props) => {
  const selectedPost = getPostById(state, props.match.params.id);
  const postAuthor = getUserById(state, selectedPost.creator);
  const loggedUser = getLoggedUser(state);
  const rank = getRank(state);
  return {
    selectedPost,
    postAuthor,
    loggedUser,
    rank,
  };
};

const mapDispatchToProps = dispatch => ({
  selectedPost: id => dispatch(fetchSelectedPost(id)),
});


const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Post,
  Container as Post,
  Component as PostComponent,
};
