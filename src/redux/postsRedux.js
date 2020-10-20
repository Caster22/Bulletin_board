import Axios from 'axios';
import shortid from 'shortid';

/* selectors */
export const getAllPosts = ({ posts }) => posts;
export const getPostById = ({ posts }, id) => {};
export const getLoadingStatus = ({posts}) => posts.loading;

/* action name creator */
const reducerName = 'posts';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const FETCH_START = createActionName('FETCH_START');
const FETCH_SUCCESS = createActionName('FETCH_SUCCESS');
const FETCH_ERROR = createActionName('FETCH_ERROR');
const UPDATE_POST = createActionName('UPDATE_POST');
const ADD_NEW_POST = createActionName('ADD_NEW_POST');

/* action creators */
export const fetchStarted = payload => ({ payload, type: FETCH_START });
export const fetchSuccess = payload => ({ payload, type: FETCH_SUCCESS });
export const fetchError = payload => ({ payload, type: FETCH_ERROR });
export const updatePost = payload => ({ payload, currentDate: new Date(), type: UPDATE_POST });
export const addPost = payload => ({ payload, currentDate: new Date(), id: shortid.generate(), type: ADD_NEW_POST });

/* thunk creators */
export const fetchAllPosts = () => {
  return (dispatch, getState) => {
    dispatch(fetchStarted());
    const state = getState();
    if(!state.posts.data) {
      Axios
        .get('http://localhost:8000/api/posts')
        .then(res => {
          dispatch(fetchSuccess(res.data));
        })
        .catch(err => {
          dispatch(fetchError(err.message || true));
        });
    }
  };
};

export const fetchSelectedPost = (id) => {
  return async dispatch => {
    dispatch(fetchStarted());

    try {
      let res = await Axios.get(`http://localhost:8000/api/posts/${id}`);
      await new Promise((resolve, reject) => resolve());
      dispatch(fetchSuccess(res.data));
    } catch(err) {
      dispatch(fetchError(err.message || true));
    }
  };
};

export const addNewPostRequest = (post) => {
  return async dispatch => {
    dispatch(fetchStarted());

    try {
      let res = await Axios.post('http://localhost:8000/api/posts', post);
      await new Promise((resolve) => resolve());
      dispatch(addPost(res));
    } catch(e) {
      dispatch(fetchError(e.message || true));
    }
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
        data: action.payload,
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
    case UPDATE_POST: {
      return {
        ...statePart,
        data:
        statePart.data.map(data => {
          if (data.id === action.payload.postId) {
            return {
              ...data,
              [action.payload.id]: action.payload.value,
              editDate: action.currentDate.toString(),
            };
          } else {
            return {
              ...data,
            };
          }
        }),
      };
    }
    case ADD_NEW_POST: {
      return {
        ...statePart,
        loading: {
          active: false,
          error: false,
        },
        data: [
          ...statePart.data,
          ...action.payload,
        ],
      };
    }
    default:
      return statePart;
  }
};
