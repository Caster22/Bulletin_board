import React from 'react';
import PropTypes from 'prop-types';
import styles from './PostTemplate.scss';
import { connect } from 'react-redux';
import {getAllPosts, updatePost, addNewPostRequest, fetchSelectedPost} from '../../../redux/postsRedux';
import { getAllStatus, fetchAllStatus } from '../../../redux/statusRedux';
import {getAll, fetchAllUsers} from '../../../redux/usersRedux';

let postObj = {};

class Component extends React.Component {
  state = {
    title: /*this.props.post.data.title ||*/ '',
    shortDesc: /*this.props.post.data.shortDesc ||*/ '',
    description: /*this.props.post.data.description ||*/ '',
    status: /*this.props.post.data.status ||*/ '1',
    postStatus: null,
    postStatusDesc: '',
  }

  componentDidMount = () => {
    const { fetchUsers, getStatus, selectedPost } = this.props;
    selectedPost(this.props.id);
    getStatus();
    fetchUsers();
  }

  handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch('my-api', {
      method: 'POST',
      body: data,
    });
    const title = data.get('title');
    const shortDesc = data.get('shortDesc');
    const description = data.get('description');
    const status = data.get('status');
    const m = new Date();
    const dateString = m.getUTCFullYear() +'/'+ (m.getUTCMonth()+1) +'/'+ m.getUTCDate();
    postObj = {
      title: title,
      shortDesc: shortDesc,
      description: description,
      status: status,
      creationDate: dateString,
    };
    console.log(postObj);
    this.props.addPost(postObj, this.props.user.list[0]._id);
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

  createPost(data, author) {
    if (this.state.title && this.state.shortDesc && this.state.description && this.state.status) {
      if (this.state.title.length >= 10 && this.state.shortDesc >= 10 && this.state.description >= 20){
        this.props.addPost(data, author);
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
    const { /*post,*/ allStatus, /*updatePost,*/ type, user} = this.props;

    if (!allStatus.data && !user.list) {
      return (
        <div className={ styles.root }>
          Loading...
        </div>
      );
    } else {
      return (
        <div className={ styles.root }>
          <div className={this.state.postStatus === true ? `${styles.postStatus} ${styles.active}`  : this.state.postStatus === false ? `${styles.postStatus} ${styles.disactive}` : styles.postStatus}>
            <p>{this.state.postStatusDesc}</p>
          </div>
          <div >
            <form onSubmit={this.handleSubmit}>
              <label htmlFor='title'>Title:</label>
              <input
                type='text'
                id='title'
                name='title'
                minLength='10'
                //value={this.state.title}
                //onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, post.data._id, updatePost)}
                required
              />
              <label htmlFor='shortDesc'>Short description:</label>
              <textarea
                id='shortDesc'
                name='shortDesc'
                minLength='20'
                //value={this.state.shortDesc}
                //onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, post.data._id, updatePost)}
                required
              />
              <label htmlFor='description'>Description:</label>
              <textarea
                id='description'
                name='description'
                minLength='20'
                //value={this.state.description}
                //onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, post.data._id, updatePost)}
                required
              />
              <label htmlFor='status'>Status:</label>
              <select
                name='status'
                id='status'
                defaultValue={this.state.status}
                //onChange={event => this.updateData(event.currentTarget.value ,event.currentTarget.id, post.data._id, updatePost)}
                required
              >
                {allStatus.data.map(status => (
                  <option key={status._id} value={status._id}>{status.statusName}</option>
                ))}
              </select>
              {type === 'Add'
                ?
                <button /*onClick={() => {
                  this.createPost(user.list[0]);
                }}*/>
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
}

Component.propTypes = {
  post: PropTypes.any,
  allStatus: PropTypes.any,
  getCurrentUser: PropTypes.string,
  updatePost: PropTypes.func,
  addPost: PropTypes.func,
  type: PropTypes.string,
  id: PropTypes.string,
  selectedPost: PropTypes.func,
  getStatus: PropTypes.func,
  fetchUsers: PropTypes.func,
  user: PropTypes.any,

};

Component.defaultProps = {
  post: {},
  allStatus: [],
};

const mapStateToProps = (state, props) => ({
  post: getAllPosts(state),
  allStatus: getAllStatus(state),
  user: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  updatePost: (value, id, postId) => dispatch(updatePost({ value, id, postId })),
  addPost: (componentState, currentUser) => dispatch(addNewPostRequest({ componentState, currentUser })),
  getStatus: () => dispatch(fetchAllStatus()),
  selectedPost: id => dispatch(fetchSelectedPost(id)),
  fetchUsers: () => dispatch(fetchAllUsers()),

});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  // Component as PostTemplate,
  Container as PostTemplate,
  Component as PostTemplateComponent,
};
