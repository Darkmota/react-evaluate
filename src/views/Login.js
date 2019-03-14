import React from 'react'
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
    this.onLogin.bind(this)
  }
  
  handleSubmit = (e) => {
    e.preventDefault()
    
  }

  async onLogin () {
    message.info('Login start!')
    let res = await IO.loginAsTeacher(this.state.id, this.state.password)
  }

  render () {
    return (
      <>
        <div className="container">
          <div className="logo">
            <div className="title"></div>
            <div className="u-input">
              <input type="text" className="input" placeholder="请输入账号"></input>
              <input type="password" className="input" placeholder="请输入密码"></input>
              <button className="login" onClick={this.onLogin}>登录</button>
            </div>
          </div>
        </div>
        <style jsx>{`
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
