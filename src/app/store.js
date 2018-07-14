// @flow
import { createStore } from 'redux'

import { middleware } from './middleware'
import { reducer } from './reducer'

import { loadState, saveState } from './localStorage'
import throttle from 'lodash/throttle'

const persitedState =loadState();

export const store = createStore(reducer, persitedState, middleware)

store.subscribe(throttle(() => {
  saveState({
    BookmarkReducer: store.getState().BookmarkReducer
  });
}, 1000));

window.store = store
