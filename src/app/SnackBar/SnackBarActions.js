import ActionTypes from '../ActionTypes'

export function showMessage(message) {
  return {
    type: ActionTypes.SHOW_MESSAGE,
    payload: message
  };
}

export function clearMessage() {
  return {
    type: ActionTypes.CLEAR_MESSAGE,
  };
}
