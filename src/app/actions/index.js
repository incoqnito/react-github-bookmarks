// import fetch from 'cross-fetch'
import axios from 'axios'

export const SEARCH_ONCHANGE = 'SEARCH_ONCHANGE'
export const SEARCH_RECEIVE_DATA = 'SEARCH_RECEIVE_DATA'
export const DROPDOWN_SHOW = 'DROPDOWN_SHOW'
export const DROPDOWN_HIDE = 'DROPDOWN_HIDE'

export const ADD_BOOKMARK = 'ADD_BOOKMARK'
export const DELETE_BOOKMARK = 'DELETE_BOOKMARK'
export const MOVE_BOOKMARK = 'MOVE_BOOKMARK'

export const COLUMN_NAME_ONCHANGE = 'COLUMN_NAME_ONCHANGE'
export const ADD_COLUMN = 'ADD_COLUMN'
export const DELETE_COLUMN = 'DELETE_COLUMN'

// Changing value of search input
export const searchOnchange = text => ({
  type: SEARCH_ONCHANGE,
  data: text
})

// Received data of 5 first results
export const searchReaceiveData = json => ({
  type: SEARCH_RECEIVE_DATA,
  items: json
})

// Also we can get data from GitHUB API using fetch
// export const searchFetchQuery = text => dispatch => {
//   return fetch(`https://api.github.com/search/repositories?q=${text}+in:name&sort=stars`)
//     .then(response => response.json())
//     .then(json => dispatch(searchReaceiveData(json.items.slice(0, 5))))
// }

// Fetching data from GitHUB API
export const searchFetchQuery = text => dispatch => {
  return axios.get(`https://api.github.com/search/repositories?q=${text}+in:name&sort=stars`)
    .then(function (response) {
      // here we can change results amount
      dispatch(searchReaceiveData(response.data.items.slice(0, 5)))
    })
    .catch(function (error) {
      console.log(error)
    })
}

// Showing dropdown box
export const dropdownShow = () => ({
  type: DROPDOWN_SHOW
})

// Hiding dropdown box
export const dropdownHide = () => ({
  type: DROPDOWN_HIDE
})

// Adding new bookmark
export const addBookmark = item => ({
  type: ADD_BOOKMARK,
  item: item
})

// Deleting bookmark
export const deleteBookmark = (id, columnName) => ({
  type: DELETE_BOOKMARK,
  id: id,
  column: columnName
})

// Moving bookmark
export const moveBookmark = (id, idColumnName, indexOfId, atIndexColumnName, indexOfatIndex) => ({
  type: MOVE_BOOKMARK,
  id: id,
  idColumnName: idColumnName,
  indexOfId: indexOfId,
  atIndexColumnName: atIndexColumnName,
  indexOfatIndex: indexOfatIndex
})

// Changing value of add column input
export const columnNameOnchange = text => ({
  type: COLUMN_NAME_ONCHANGE,
  text: text
})

// Adding new column
export const addColumn = name => ({
  type: ADD_COLUMN,
  name: name
})

// Deleting column
export const deleteColumn = (name, cards) => ({
  type: DELETE_COLUMN,
  name: name,
  cards: cards
})
