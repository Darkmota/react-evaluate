import React from 'react'
import { Route, Switch, BrowserRouter, withRouter, Link } from 'react-router-dom'
import "./App.css"
import Axios from 'axios'

import Login from './views/Login'
import Index from './views/Index'
import Page2 from './views/Page2'

import { createStore } from 'redux'

Axios.interceptors.request.use(
  config => {
    let token = window.localStorage.getItem('x-token')
    console.log(token)
    if (token) {
      config.headers['x-token'] = token
    }
    return config
  },
  error => {
    throw error
  })

Axios.interceptors.response.use(
  res => {
    console.log(res)
    if (res.headers['set-token']) {
      window.localStorage.setItem('x-token', res.headers['x-token'])
    }
    return res
  })

class App extends React.Component {
  render() {
    return (
      <>
        <Route exact path="/" component={Login}></Route>
        <Route path="/index" component={Index}></Route>
      </>
    )
  }
}
export default App
