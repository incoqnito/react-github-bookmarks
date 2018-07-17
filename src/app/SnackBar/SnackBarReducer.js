import ActionTypes from '../ActionTypes'

const InitialState = {
  message: '',
  msgType: 'information',
  open: false
};

const SnackBarReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.SHOW_MESSAGE:
      return {
        ...state,
        message: action.payload,
        open: true
      };
      break;
    case ActionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        message: '',
        open: false
      };
      break;
    default:
      return state;
  }
}

export default SnackBarReducer;
