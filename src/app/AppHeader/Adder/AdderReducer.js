import ActionTypes from '../../ActionTypes'

const InitialState = {
  query: "",
  searchResults: []
};

const AdderReducer = (state = InitialState, action) => {
  switch (action.type) {
    case ActionTypes.SEARCH_REPOS:
      state = {
        ...state,
        query: action.payload.query,
        searchResults: action.payload.searchResults
      };
      return state;
      break;
    default:
    return state;
  }
}

export default AdderReducer;
