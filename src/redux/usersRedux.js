/* selectors */

import Axios from 'axios';

export const getAll = ({ users }) => users;
export const getLoggedUser = ({ users }) => users.loggedUser;
export const getUserById = ({ users }, id) => users.list.filter(user => user.id === id)[0];
export const getRank = ({ users }) => users.selectedRank;

/* action name creator */
const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const REFRESH_USER = createActionName('REFRESH_USER');
const SET_RANK = createActionName('SET_RANK');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const refreshUser = payload => ({ payload, type: REFRESH_USER });
export const setRank = payload => ({ payload, type: SET_RANK });

/* thunk creators */
export const fetchAllUsers = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());

    Axios
      .get('http://localhost:8000/api/users')
      .then(res => {
        dispatch(fetchSuccess(res.data));
      })
      .catch(err => {
        dispatch(fetchError(err.message || true));
      });
  };
};

/* reducer */
export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case FETCH_START: {
      return {
        ...statePart,
        loading: {
          active: true,
          error: false,
        },
      };
    }
    case FETCH_SUCCESS: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        list: action.payload,
      };
    }
    case FETCH_ERROR: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: action.payload,
        },
      };
    }
    case REFRESH_USER: {
      return {
        ...statePart,
        loggedUser: action.payload,
      };
    }
    case SET_RANK: {
      return {
        ...statePart,
        selectedRank: action.payload,
      };
    }
    default:
      return statePart;
  }
};
