export const UPDATE_COMPOSER = "UPDATE_COMPOSER"
export const ADD_MESSAGE = "ADD_MESSAGE"

// @network Action types
export const MESSAGE_REQUEST = "MESSAGE_REQUEST";
export const MESSAGE_CALL_SUCCESS = "MESSAGE_CALL_SUCCESS";
export const MESSAGE_CALL_FAILURE = "MESSAGE_CALL_FAILURE";

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
export const messageRequest = () => {
  return {
    type: MESSAGE_REQUEST,
  }
}

export const messageCallSuccess = (data) => {
  return {
    type: MESSAGE_CALL_SUCCESS,
    data
  }
}

export const messageCallFailure = (error) => {
  return {
    type: MESSAGE_CALL_FAILURE,
    error
  }
}
