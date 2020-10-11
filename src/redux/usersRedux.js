/* selectors */

export const getAll = ({ users }) => users.list;
export const getLoggedUser = ({ users }) => users.loggedUser;
export const getUserById = ({ users }, id) => users.list.filter(user => user.id === id);
export const getRank = ({ users }) => users.selectedRank;

/* action name creator */

const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const REFRESH_USER = createActionName('REFRESH_USER');
const SET_RANK = createActionName('SET_RANK');

/* action creators */

export const refreshUser = payload => ({ payload, type: REFRESH_USER });
export const setRank = payload => ({ payload, type: SET_RANK });

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
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
