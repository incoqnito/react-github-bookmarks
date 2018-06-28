import { connect } from 'react-redux'
import { searchRepos, addRepo } from './AdderActions'
import Adder from './Adder'

const getSuggestions = (AdderState) => {
  let inputValue = AdderState.query;
  let suggestions = AdderState.searchResults;

  let count = 0;
  return suggestions.filter(suggestion => {
    const keep =
      (!inputValue || suggestion.full_name.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1) &&
      count < 5;
    if (keep) {
      count += 1;
    }
    return keep;
  });

}


const mapStateToProps = state => ({
  suggestions: getSuggestions(state.AdderReducer)
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
