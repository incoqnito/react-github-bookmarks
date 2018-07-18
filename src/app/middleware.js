// @flow
import { applyMiddleware } from 'redux'
//import { createLogger } from 'redux-logger'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import promise from 'redux-promise'
import { Iterable } from 'immutable'

const error = (store) => (next) => (action) => {
  if (action.error) {
    console.error(`An error occured in action ${action.type}!`, {
      error: action.payload,
      action
    })

    throw action.payload
  } else {
    return next(action)
  }
}

// const logger = createLogger({
//   stateTransformer: (state) => {
//     if (Iterable.isIterable(state)) return state.toJS()
//     else return state
//   },
//   actionTransformer: (action) => {
//     if (Iterable.isIterable(action.payload)) {
//       action.payload = action.payload.toJS()
//     }
//
//     return action
//   }
// })

export const middleware = applyMiddleware(error, thunk, promise, logger)
