export const UPDATE_COMPOSER = "UPDATE_COMPOSER"
export const ADD_MESSAGE = "ADD_MESSAGE"

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
