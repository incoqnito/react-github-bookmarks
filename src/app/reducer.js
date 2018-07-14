// @flow
import { combineReducers } from 'redux'
//import { combineReducers } from 'redux-immutable'
import AdderReducer from './AppHeader/Adder/AdderReducer'
import BookmarkReducer from './Bookmarks/BookmarkReducer'

export const reducer = combineReducers({
  AdderReducer,
  BookmarkReducer
})
