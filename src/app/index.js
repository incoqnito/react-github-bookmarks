// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Switch, Redirect, Route } from 'react-router-dom'

import { store } from './store'
import { routes } from './routes'

import './global'

import AppHeader from './AppHeader/AppHeader'
import SnackBar from './SnackBar/SnackBarContainer'

class Application extends React.PureComponent<{||}> {
  render () {
    return (
      <Provider store={store}>
      <div>
        <AppHeader/>
        <Router>
          <Switch>
            {
              routes.map((route, i) => {
                return <Route key={i} path={route.path} component={route.component} />
              })
            }
            <Redirect key={-1} to='/bookmarks' />
          </Switch>
        </Router>
        <SnackBar/>
      </div>
      </Provider>
    )
  }
}

ReactDOM.render(
  <Application />, (document.getElementById('root'): any))
