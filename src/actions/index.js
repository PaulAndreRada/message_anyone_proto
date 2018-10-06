export const UPDATE_COMPOSER = "UPDATE_COMPOSER"
export const ADD_MESSAGE = "ADD_MESSAGE"

// @network Action types
export const API_CALL_REQUEST = "API_CALL_REQUEST";
export const API_CALL_SUCCESS = "API_CALL_SUCCESS";
export const API_CALL_FAILURE = "API_CALL_FAILURE";

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
export const apiCallRequest = () => {
  return {
    type: API_CALL_REQUEST,
  }
}

export const apiCallSuccess = (data) => {
  return {
    type: API_CALL_SUCCESS,
    data
  }
}

export const apiCallFailure = (error) => {
  return {
    type: API_CALL_FAILURE,
    error
  }
}
