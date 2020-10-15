import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { connect } from 'react-redux';
import { getLoggedUser, getUserById } from '../../../redux/usersRedux';
import { getPostById } from '../../../redux/postsRedux';
import styles from './PostEdit.module.scss';
import { PostTemplate } from '../../features/PostTemplate/PostTemplate';
import { NotFound } from '../NotFound/NotFound';

class Component extends React.Component {

  editRender = () => {
    if (this.props.rank === 'admin' || this.props.loggedUser === this.props.getPostById.creatorId) {
      return (
        <PostTemplate id={this.props.match.params.id} type={'edit'} />
      );
    } else {
      return (
        <NotFound />
      );
    }
  };

  render() {
    const {className} = this.props;
    return (
      <div className={clsx(className, styles.root)}>
        <h2>PostEdit</h2>
        {this.editRender()}
      </div>
    );
  }
}



Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  loggedUser: PropTypes.string,
  rank: PropTypes.string,
  match: PropTypes.object,
  getPostById: PropTypes.object,
};

const mapStateToProps = (state, props) => {
  const loggedUser = getLoggedUser(state);
  const rank = !getUserById(state, loggedUser) ? 'Not Logged' : getUserById(state, loggedUser).rank;

  return {
    loggedUser,
    rank,
    getPostById: getPostById(state, props.match.params.id),
  };
};

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

const Container = connect(mapStateToProps)(Component);

export {
  //Component as PostEdit,
  Container as PostEdit,
  Component as PostEditComponent,
};
