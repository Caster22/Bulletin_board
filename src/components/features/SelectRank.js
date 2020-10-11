import React from 'react';
import PropTypes from 'prop-types';
import styles from './SelectRank.scss';
import {getAll, setRank} from '../../redux/usersRedux';
import { connect } from 'react-redux';


class Component extends React.Component {
  state = {
    defaultValue: 'Not logged',
  };
  render() {
    const { setRank, users } = this.props;
    return (
      <div>
        <select
          defaultValue={this.state.defaultValue}
          className={styles.dropdown}
          onChange={event => setRank(event.currentTarget.value)}
        >
          {users.map(user => (
            <option key={user.id} value={user.rank}>{user.rank}</option>
          ))}
        </select>
      </div>
    );
  }
}

Component.propTypes = {
  setRank: PropTypes.func,
  users: PropTypes.array,
};

const mapStateToProps = state => ({
  users: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  setRank: value => dispatch(setRank(value)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as SelectRank,
  Container as SelectRank,
  Component as SelectRankComponent,
};
