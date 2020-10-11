/* selectors */

export const getAll = ({ users }) => users.list;
export const getLoggedUser = ({ users }) => users.loggedUser;
export const getUserById = ({ users }, id) => users.list.filter(user => user.id === id);

/* action name creator */

const reducerName = 'users';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */

const REFRESH_USER = createActionName('REFRESH_USER');

/* action creators */

export const refreshUser = payload => ({ payload, type: REFRESH_USER });

/* reducer */

export const reducer = (statePart = [], action = {}) => {
  switch (action.type) {
    case REFRESH_USER: {
      return {
        ...statePart,
        loggedUser: action.payload,
      };
    }
    default:
      return statePart;
  }
};
