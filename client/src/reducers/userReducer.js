import types from '../actions/types';

export default function reducer(state = {
    user: {}
}, action) {
  switch (action.type) {
    case types.GET_USER_SUCCESS: {
      if(action.payload && action.payload.user) {
        return {
          ...state,
          user: action.payload.user            
        }
      }
      else return {
        ...state
      }
    }
    default: {
        return { ...state }
    }
  }
}