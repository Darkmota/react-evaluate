import React from 'react'
import { Link, Redirect, IndexRedirect } from 'react-router-dom'
import { Form, Icon, Input, Button, Checkbox, Layout, message } from 'antd'
import IO from '../utils/Mutation'
const { Content } = Layout

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      id: '',
      password: ''
    }
    console.log(this.state)
    this.onLogin = this.onLogin.bind(this)
    this.onRegister = this.onRegister.bind(this)
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
  }

  onLogin = async () => {
    message.info('Login start!')
    let res = await IO.loginAsTeacher(this.state.id, this.state.password)
    console.log(res)
  }

  onRegister = async () => {
    message.info('Register start!')
    let res = await IO.registerAsTeacher(this.state.id, this.state.password)
    console.log(res)
  }
  
  onChange = async (type, event) => {
    console.log(event.target.value, type)
  }

  render () {
    return (
      <>
        <div className="container">
          <div className="logo">
            <div className="title"></div>
            <div className="u-input">
              <Input placeholder="Test" onChange={this.onChange.bind(this, 'id')}/>
              <input type="text" className="input" placeholder="请输入账号"></input>
              <input type="password" className="input" placeholder="请输入密码"></input>
              <button className="login" onClick={this.onLogin}>登录</button>
              <button className="register" onClick={this.onRegister}>注册</button>
            </div>
          </div>
        </div>
        <style>{`
          .container {
            width: 800px;
            height: 600px;
            margin: auto;
            background-color: #eee;
          }
        `}
        </style>
      </>
    )
  }
}

export default Login
