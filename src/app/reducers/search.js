import update from 'immutability-helper'
import { SEARCH_ONCHANGE,
  SEARCH_RECEIVE_DATA,
  DROPDOWN_SHOW,
  DROPDOWN_HIDE } from '../actions'

// The valuse of initial state
const initialState = { searchtext: '', items: [], dropdown: false }

const search = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_ONCHANGE:
      return update(state, { searchtext: { $set: action.data } })
    case SEARCH_RECEIVE_DATA:
      return update(state, { items: { $set: action.items },
        dropdown: { $set: true } })
    case DROPDOWN_SHOW:
      return update(state, { dropdown: { $set: true } })
    case DROPDOWN_HIDE:
      return update(state, { dropdown: { $set: false } })
    default:
      return state
  }
}

export default search
