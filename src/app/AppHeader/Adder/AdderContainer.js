import { connect } from 'react-redux'
import { searchRepos, addRepo } from './AdderActions'
import Adder from './Adder'

const getSuggestions = (state) => {
  let inputValue = state.AdderReducer.query;
  let suggestions = state.AdderReducer.searchResults;
  let bookmarkLists = state.BookmarkReducer;
  let selection = [];
  let count = 0;
  let preSelection = suggestions.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.full_name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 3;
    if (keep) {
      count += 1;
    }
    return keep;
  });
  preSelection.forEach((suggestion) => {
    let saved = false;
    for (var index in bookmarkLists) {
      if (bookmarkLists.hasOwnProperty(index)) {
        bookmarkLists[index].bookmarks.forEach(bookmark => {
          if (bookmark.id === suggestion.id) {
            saved = true;
          }
        });
      }
    }
    selection.push(
      {...suggestion, saved}
    );
  });
  return selection;
}

const mapStateToProps = state => ({
  suggestions: getSuggestions(state),
  lastQuery: state.AdderReducer.query
})

const mapDispatchToProps = dispatch => {
  return{
    searchRepos: (query) => { dispatch(searchRepos(query)); },
    addRepo: (url) => { dispatch(addRepo(url)); }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Adder)
