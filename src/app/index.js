// @flow
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import { store } from './store'
import { routes } from './routes'

import './global'

class Application extends Component {
  render () {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            {
              routes.map((route, i) => {
                return <Route key={i} path={route.path} component={route.component} />
              })
            }
            <Redirect key={-1} to='/browse' />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Application />, (document.getElementById('root'))
)
