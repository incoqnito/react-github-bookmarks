import update from 'immutability-helper'
import { loadState } from '../additional/additionalFunc'

import { ADD_BOOKMARK,
  DELETE_BOOKMARK,
  MOVE_BOOKMARK,
  COLUMN_NAME_ONCHANGE,
  ADD_COLUMN,
  DELETE_COLUMN } from '../actions'

// loading state from the Local Storage  
const persistedState = loadState()

const bookmarks = (state = persistedState.bookmarks, action) => {
  switch (action.type) {
    case MOVE_BOOKMARK:
      return update(state, {
        columns: {
          $set: state.columns.map(el => el.name === action.idColumnName ? update(el, { cards: { $splice: [[action.indexOfId, 1]] } }) : el)
            .map(el => el.name === action.atIndexColumnName ? update(el, { cards: { $splice: [[action.indexOfatIndex, 0, action.id]] } }) : el)
        }
      })
    case ADD_BOOKMARK:
      return update(state, { list: { $set: { ...state.list, [action.item.id]: action.item } },
        columns: { 0: { cards: { $push: [action.item.id] } } }
      })
    case DELETE_BOOKMARK:
      return update(state, { list: { $unset: [action.id] },
        columns: { $set: state.columns.map(el => (el.name === action.column) ? { name: el.name, cards: el.cards.filter(arrEl => arrEl !== action.id) } : el) }})
    case COLUMN_NAME_ONCHANGE:
      return update(state, { name: { $set: action.text } })
    case ADD_COLUMN:
      return update(state, { columns: { $push: [{ name: action.name, cards: [] }] },
        name: { $set: '' }
      })
    case DELETE_COLUMN:
      return update(state, { columns: { $set: state.columns.filter(el => el.name !== action.name)
        .map((el, i) => i === 0 ? update(el, { cards: { $push: action.cards } }) : el) } })
    default:
      return state
  }
}

export default bookmarks
