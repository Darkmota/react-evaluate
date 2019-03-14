import React from 'react'
import { Route, Switch } from 'react-router-dom'
import moment from 'moment'
import "./App.css"

import Login from './views/Login'
import Page1 from './views/Page1'
import Page2 from './views/Page2'

moment.locale('zh-cn')

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route path="/1">
          <Page1></Page1>
        </Route>
        <Route path="/2">
          <Page2></Page2>
        </Route>
      </Switch>
    )
  }
}
export default App
