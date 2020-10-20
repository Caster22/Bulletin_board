import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import styles from './PostEdit.module.scss';
import { PostTemplate } from '../../features/PostTemplate/PostTemplate';
import { NotFound } from '../NotFound/NotFound';
import {fetchSelectedPost, getAllPosts} from '../../../redux/postsRedux';

const loggedUser = {
  id: '5f8d7df50ddc0e0315a3dfcf',
  rank: 'user',
};

class Component extends React.Component {

  componentDidMount = () => {
    const { selectedPost } = this.props;

    selectedPost(this.props.match.params.id);
  }

  render() {
    const { post } = this.props;

    const editRender = () => {
      if (loggedUser.rank === 'admin' || loggedUser.id === post.data.creator._id) {
        return (
          <PostTemplate id={this.props.match.params.id} type={'edit'} />
        );
      } else {
        return (
          <NotFound />
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
          <h2 className='text-center pt-5'>PostEdit</h2>
          {editRender()}
        </div>
      );
    }
  }
}



Component.propTypes = {
  post: PropTypes.any,
  selectedPost: PropTypes.func,
  match: PropTypes.any,
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
  //Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
