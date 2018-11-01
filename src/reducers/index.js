import { combineReducers } from 'redux'
import * as Actions from '../actions'


function messages( state={}, action ){
  switch(action.type){
    case Actions.ADD_MESSAGE:
      return{
          ...state,
          message: action.text
      }
    default:
      return state
  }
}

function messageComposer( state={composerText:''}, action ){
  switch(action.type) {
    case Actions.UPDATE_COMPOSER:
      return {
        ...state,
        composerText: action.text
      }
    default:
      return state
  }
}


// @network
const networkInitState = {
  fetching: false,
  data: null,
  error: null
}

// @network
export function network(state = networkInitState, action) {
  switch (action.type) {
    case Actions.SEND_MESSAGE:
      return {
        ...state,
        fetching: true,
        error: null
      };
    case Actions.SEND_MESSAGE_SUCCESS:
      return {
        ...state,
        fetching: false,
        data: action.data,
      }
    case Actions.SEND_MESSAGE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
    default:
      return state;
  }
}

const reducer = combineReducers({
  messages,
  messageComposer,
  network
})

export default reducer;
