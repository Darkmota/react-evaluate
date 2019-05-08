import React from 'react'
import { connect } from 'react-redux'
import { Menu, Icon } from 'antd'
import { withRouter, Route, Link } from 'react-router-dom'
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends React.Component {
  goRoute = (link) => {
    this.props.history.push(`/index/${link.route}`)
  }

  logout = () => {
    localStorage.removeItem('x-token')
    this.props.history.push('/')
  }

  handleClick = (e) => {
    console.log('click ', e.key)
  }

  render() {
    const routes = [
      { name: '布置作业', route: 'newHomework' },
      { name: '查询作业', route: 'searchHomework' },
      { name: '上传头像', route: 'profile' },
    ]
    return (
      <>
        <Menu
          theme="light"
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['newHomework']}
          defaultOpenKeys={['sub1']}
          mode="inline"
        >
          {routes.map((link) => {
              return (
                <Menu.Item key={link.route} onClick={this.goRoute.bind(this, link)}>{link.name}</Menu.Item>
              )
            })}
          <Menu.Item key="logout" onClick={this.logout.bind(this)}>退出登录</Menu.Item>
        </Menu>
      </>
    )
  }
}

export default withRouter(Sider)
