import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostTemplate.scss';
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
    if (this.state.title && this.state.shortDesc && this.state.description && this.state.status) {
      if (this.state.title.length >= 10 && this.state.shortDesc >= 10 && this.state.description >= 20){
        this.props.addPost(this.state, author);
        this.statusChanger(true,'New Post Added');
      } else {
        this.statusChanger(false,'Something went wrong');
      }
    } else {
      this.statusChanger(false,'Something went wrong');
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
    const { selectedPost, allStatus, updatePost, type, getCurrentUser} = this.props;
    return (
      <div className={ styles.root }>
        <div className={this.state.postStatus === true ? `${styles.postStatus} ${styles.active}`  : this.state.postStatus === false ? `${styles.postStatus} ${styles.disactive}` : styles.postStatus}>
          <p>{this.state.postStatusDesc}</p>
        </div>
        <div >
          <form>
            <label htmlFor='title'>Title:</label>
            <input
              type='text'
              id='title'
              minLength='10'
              value={this.state.title}
              onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, selectedPost.id, updatePost)}
              required
            />
            <label htmlFor='shortDesc'>Short description:</label>
            <textarea
              id='shortDesc'
              minLength='20'
              value={this.state.shortDesc}
              onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, selectedPost.id, updatePost)}
              required
            />
            <label htmlFor='description'>Description:</label>
            <textarea
              id='description'
              minLength='20'
              value={this.state.description}
              onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, selectedPost.id, updatePost)}
              required
            />
            <label htmlFor='status'>Status:</label>
            <select
              name='status'
              id='status'
              defaultValue={this.state.status}
              onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, selectedPost.id, updatePost)}
              required
            >
              {allStatus.map(status => (
                <option key={status.id} value={status.id}>{status.statusName}</option>
              ))}
            </select>
            {type === 'Add'
              ?
              <button onClick={() => {
                this.createPost(getCurrentUser);
              }}>
                Add new
              </button>
              :
              null
            }
          </form>
        </div>
      </div>
    );
  }
}

Component.propTypes = {
  selectedPost: PropTypes.object,
  allStatus: PropTypes.array,
  getCurrentUser: PropTypes.string,
  updatePost: PropTypes.func,
  addPost: PropTypes.func,
  type: PropTypes.string,
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
  updatePost: (value,id, postId) => dispatch(updatePost({ value,id,postId })),
  addPost: (componentState, currentUser) => dispatch(addPost({componentState, currentUser})),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostTemplate,
  Container as PostTemplate,
  Component as PostTemplateComponent,
};
