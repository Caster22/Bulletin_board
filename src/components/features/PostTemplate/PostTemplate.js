import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPostById, updatePost, addPost } from '../../../redux/postsRedux';
import { getLoggedUser } from '../../../redux/usersRedux';
import { getAllStatus } from '../../../redux/statusRedux';

class Component extends React.Component {
  state = {
    title: this.props.selectedPost.title || '',
    shortDesc: this.props.selectedPost.shortDesc || '',
    description: this.props.selectedPost.description || '',
    status: this.props.selectedPost.status || '1',
    postStatus: null,
    postStatusDesc: '',
  }

  updateData(value, key, id, func) {
    this.setState({
      ...this.state,
      [key]: value,
    });
    func(value, key, id);
  }

  clearData() {
    this.setState({
      ...this.state,
      title: '',
      shortDesc: '',
      description: '',
      status: '1',
    });
  }

  createPost(author) {
    if (this.state.title && this.state.shortDesc && this.state.description) {
      if (this.state.title.length >= 10 && this.state.shortDesc >= 10 && this.state.description >= 20){
        this.props.addPost(this.state, author);
        this.updateData(true,'New Post Added');
      } else {
        this.updateData(false,'Something went wrong');
      }
    } else {
      this.updateData(false,'Something went wrong');
    }
  }

  statusChanger(status, description) {
    this.setState({
      ...this.state,
      postStatus: status,
      postStatusDesc: description,
    });

    if(status) {setTimeout(() => this.clearData(), 100);}
    setTimeout(() => {
      this.setState({
        ...this.state,
        postStatus: null,
      });
    }, 3000);
  }

  render() {
    //const {} = this.props;
    return (
      <div>
        asd
      </div>
    );
  }
}

Component.propTypes = {
  selectedPost: PropTypes.object,
  allStatus: PropTypes.array,
  getCurrentUser: PropTypes.string,
  addPost: PropTypes.func,
};

Component.defaultProps = {
  selectedPost: {},
  allStatus: [],
};

const mapStateToProps = (state, props) => ({
  selectedPost: getPostById(state, props.id),
  allStatus: getAllStatus(state),
  getCurrentUser: getLoggedUser(state),
});

const mapDispatchToProps = dispatch => ({
  updatePost: (value,id, postId) => dispatch(updatePost({value,id,postId})),
  addPost: (componentState, currentUser) => dispatch(addPost({componentState, currentUser})),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostTemplate,
  Container as PostTemplate,
  Component as PostTemplateComponent,
};
