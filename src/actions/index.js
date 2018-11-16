// Composer Actions
export const UPDATE_COMPOSER = "UPDATE_COMPOSER"

// Socket
export const LISTEN_TO_SERVER = "LISTEN_TO_SERVER";
export const CONNECTED_TO_SERVER = "CONNECTED_TO_SERVER";
export const SEND_MESSAGE = "SEND_MESSAGE";
export const SEND_MESSAGE_SUCCESS = "SEND_MESSAGE_SUCCESS";
export const SEND_MESSAGE_FAILURE = "SEND_MESSAGE_FAILURE";
export const LOAD_MESSAGES = "LOAD_MESSAGES";
export const LOAD_MESSAGES_SUCCESS = "LOAD_MESSAGES_SUCCESS";
export const LOAD_MESSAGES_FAILURE = "LOAD_MESSAGES_FAILURE";

// Action creators
export const updateComposer = (text) => {
  return {
    type: UPDATE_COMPOSER,
    text
  }
}

// messenger @network action creators
export const sendMessage = (message) => {
  return {
    type: SEND_MESSAGE,
    message
  }
}

export const sendMessageSuccess = (messages) => {
  return {
    type: SEND_MESSAGE_SUCCESS,
    messages
  }
}

export const sendMessageFailure = (error) => {
  return {
    type: SEND_MESSAGE_FAILURE,
    error
  }
}

export const loadMessages = () => {
  return {
    type: LOAD_MESSAGES
  }
}

export const loadMessagesSuccess = (messages) => {
  return {
    type: LOAD_MESSAGES_SUCCESS,
    messages
  }
}

export const loadMessagesFailure = (error) => {
  return {
    type: LOAD_MESSAGES_FAILURE,
    error
  }
}

export const listenToServer = () => {
  return {
    type: LISTEN_TO_SERVER
  }
}

export const connectedToServer = () => {
  return {
    type: CONNECTED_TO_SERVER
  }
}
