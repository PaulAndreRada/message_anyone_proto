import { combineReducers } from 'redux'
import * as Actions from '../actions'

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

// @socket network
function socketNetwork(state={}, action){
  switch(action.type) {
   case Actions.LISTEN_TO_SERVER:
     return {
      ...state,
      conncted: true
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
function messengerNetwork(state = networkInitState, action) {
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
        messages: action.messages,
      }
    case Actions.SEND_MESSAGE_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
  case Actions.LOAD_MESSAGES:
    return {
      ...state,
      fetching: true,
      error: null
    }
  case Actions.POLL_FOR_MESSAGES:
    return {
      ...state,
      fetching: true,
      error: null,
    }
  case Actions.LOAD_MESSAGES_SUCCESS:
    return {
      ...state,
      fetching: false,
      messages: action.messages,
    }
  case Actions.LOAD_MESSAGES_FAILURE:
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
  messageComposer,
  messengerNetwork,
  socketNetwork,
})

export default reducer;
