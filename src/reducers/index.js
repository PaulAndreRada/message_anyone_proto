import { combineReducers } from 'redux'
import * as Actions from '../actions'

const composerInitState = {
  composerText : '',
  isBlurred: false
}

function messageComposer( state=composerInitState, action ){
  switch(action.type) {
    case Actions.UPDATE_COMPOSER:
      return {
        ...state,
        composerText: action.text
      }
    case Actions.UPDATE_BLURRED:
      return {
        ...state,
        isBlurred: action.bool
      }
    default:
      return state
  }
}

const socketInitState = {
  fetching: false,
  connected: false,
  error: null,
  messages: null,
}

// @socket network
function socketNetwork(state=socketInitState, action){
  switch(action.type) {
   case Actions.LISTEN_TO_SERVER:
     return {
      ...state,
      fetching: true,
      conncted: false
     }
    case Actions.CONNECTED_TO_SERVER:
      return {
        ...state,
        fetching: false,
        connected: true
      }
    case Actions.SEND_MESSAGE:
      return {
        ...state,
        fetching: true,
        connected: true,
      }
    case Actions.LOAD_MESSAGES_SUCCESS:
      return {
        ...state,
        fetching: false,
        connected: true,
        messages: action.messages,
      }
    case Actions.LOAD_MESSAGES_FAILURE:
      return {
        ...state,
        fetching: false,
        error: action.error
      }
     default:
        return state
  }
}

const reducer = combineReducers({
  messageComposer,
  socketNetwork,
})

export default reducer;
