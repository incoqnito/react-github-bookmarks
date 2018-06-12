// @flow
import { combineReducers } from 'redux'
import search from './reducers/search'
import bookmarks from './reducers/bookmarks'

export const reducer = combineReducers({
  search,
  bookmarks
})
