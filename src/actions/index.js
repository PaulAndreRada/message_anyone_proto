export const UPDATE_COMPOSER = "UPDATE_COMPOSER"
export const ADD_MESSAGE = "ADD_MESSAGE"

// @network Action types
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";

export const addMessage = (text) => {
  return {
    type: ADD_MESSAGE,
    text
  }
}

export const updateComposer = (text) => {
  return {
    type: UPDATE_COMPOSER,
    text
  }
}

// @network action creators
export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message
  }
}

export const sendMessageSuccess = (data) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    data
  }
}

export const sendMessageFailure = (error) => {
  return {
    type: SEND_MESSAGE_FAILURE,
    error
  }
}
