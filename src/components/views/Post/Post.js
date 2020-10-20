import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { getAllPosts, fetchSelectedPost } from '../../../redux/postsRedux';

import styles from './Post.module.scss';

class Component extends React.Component {
  componentDidMount = () => {
    const { selectedPost } = this.props;

    selectedPost(this.props.match.params.id);
  }

  /*statusRender = status => (
    <p>Status: <span>{ status }</span></p>
  );*/

  render() {
    const { post } = this.props;

    const loggedUser = {
      id: '5f8d7df50ddc0e0315a3dfcf',
      rank: 'user',
    };

    const editBtn = () => {
      if (loggedUser.id === post.data.creator._id || loggedUser.rank === 'admin') {
        return (
          <div className={styles.new}>
            <a className={styles.btn} href={`/post/${post.data._id}/edit`}>
              Edit Post
            </a>
          </div>
        );
      }
    };

    if (!post.data) {
      return (
        <div className='text-center pt-5'>
          LOADING DATA...
        </div>
      );
    } else {
      return (
        <div className={styles.root}>
          <div className='container'>
            <div className={styles.container}>
              <div className='row'>
                <div className='col-12 pb-3 border-bottom border-dark'>
                  <div className='row'>
                    <div className='col-6 text-left'>Added: {post.data.creationDate.split('T')[0]} </div>
                    <div className='col-6 text-right'>Last Edit: {post.data.editDate.split('T')[0]} </div>
                  </div>
                </div>
                <div className='col-12 py-4 text-center'>
                  <div className={styles.title}>{post.data.title}</div>
                </div>
                <div className='col-12 pb-4'>
                  <div className={styles.description}>
                    {post.data.description}
                  </div>
                </div>
                <div className='col-12 border-top border-dark'>
                  <div className='row py-3 '>
                    <div className='col-6  text-left'>
                      Created by: { post.data.creator.name }
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
}

Component.propTypes = {
  selectedPost: PropTypes.func,
  match: PropTypes.any,
  post: PropTypes.any,
};

const mapStateToProps = (state) => {
  const post = getAllPosts(state);
  return {
    post,
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
