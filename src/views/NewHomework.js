import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { message, Form, Icon, Input, Button, Checkbox} from 'antd'

class NewHomework extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <h1>New</h1>
    )
  }
}

const mapStateToProps = state => ({
  isLogin: state.isLogin,
  user: state.user
})

const mapStateToDispatch = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(NewHomework))
