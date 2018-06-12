// @flow
import { createStore } from 'redux'

import { middleware } from './middleware'
import { reducer } from './reducer'
import { saveState } from './additional/additionalFunc'

export const store = createStore(reducer, middleware)

// Saving the store changing to the Local Storage
store.subscribe(() => {
  saveState({
    bookmarks: store.getState().bookmarks
  })
})

window.store = store
