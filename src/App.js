import React from 'react'
import { Route, Switch, BrowserRouter, withRouter, Link } from 'react-router-dom'
import "./App.css"

import Login from './views/Login'
import Index from './views/Index'
import Page2 from './views/Page2'

import { createStore } from 'redux'
const store = createStore()
class App extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Login}></Route>
        <Route exact path="/index" component={Index}></Route>
      </>
    )
  }
}
export default App
