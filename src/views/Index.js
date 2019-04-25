import React from 'react'
import { connect } from 'react-redux'
import { withRouter, Route, Link } from 'react-router-dom'
import './Index.css'
import NewHomework from './NewHomework'
import SearchHomework from './SearchHomework'
import Profile from './Profile'
class Index extends React.Component {
  constructor (props) {
    super(props)
  }
  goRoute = (link) => {
    this.props.history.push(`/index/${link.route}`)
  }
  render () {
    const routes = [
      { name: '布置作业', route: 'newHomework' },
      { name: '查询作业', route: 'searchHomework' },
      { name: '上传头像', route: 'profile' },
    ]
    return (
      <>
        <div className="header">
          <div className="logo"><p>LOGO</p></div>
          <div className="nav">
            <div className="nav-btn"><p>Topic 1</p></div>
            <div className="nav-btn"><p>Topic 2</p></div>
            <div className="nav-btn"><p>Topic 3</p></div>
            <div className="nav-btn"><p>Topic 4</p></div>
          </div>
        </div>
        <div className="divider"></div>
        <div className="container">
          <div className="sidebar">
            {routes.map((link) => {
              return (
                <div className="section" key={link.name} onClick={this.goRoute.bind(this, link)}>{link.name}</div>
              )
            })}
          </div>
          <div className="content">
            <Route path="/index/newHomework" component={NewHomework}></Route>
            <Route path="/index/searchHomework" component={SearchHomework}></Route>
            <Route path="/index/profile" component={Profile}></Route>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = state => ({
  isLogin: state.isLogin,
  user: state.user
})

const mapStateToDispatch = dispatch => ({
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Index))