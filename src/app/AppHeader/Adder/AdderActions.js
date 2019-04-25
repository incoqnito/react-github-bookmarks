import ActionTypes from '../../ActionTypes'
import axios from 'axios';

//this token has a public scope and is used to test this app
//and just increse the Rate limit for github-api-calls
let AccessToken = 'c436cd365f5e323ceb2ba307751e6ec878d2c3f8';

export function searchRepos(query) {
  return function(dispatch) {
    axios.get(`https://api.github.com/search/repositories?q=${query}&access_token=${AccessToken}`)
    .then(response => {
      dispatch({
        type: ActionTypes.SEARCH_REPOS,
        payload: {query:query, searchResults:response.data.items}
      });
    })
    .catch((error) => {
      console.error(error);
    })
  }
}

export function addRepo(repoLink) {
  return function(dispatch) {
    axios.get(repoLink)
    .then(response => {
      dispatch({
        type: ActionTypes.ADD_BOOKMARK,
        payload: response.data
      });
    })
    .catch((error) => {
      console.error(error);
    })
  }
}
