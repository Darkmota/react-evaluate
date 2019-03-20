import React from 'react'
import { Route, Switch, BrowserRouter, withRouter } from 'react-router-dom'
import moment from 'moment'
import "./App.css"

import Login from './views/Login'
import Page1 from './views/Page1'
import Page2 from './views/Page2'

moment.locale('zh-cn')

class App extends React.Component {
  render() {
    return (
      <>
          <Login></Login>
          <Route path="/index" component={Page1}></Route>
        
      </>
    )
  }
}
export default App
