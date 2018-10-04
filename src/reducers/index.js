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

const reducer = combineReducers({
  messages,
  messageComposer
})

export default reducer;
