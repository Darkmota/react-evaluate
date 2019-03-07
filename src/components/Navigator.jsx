import React, { Component } from 'react'
import Mutation from '../utils/Mutation'

class Navigator extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: 'Testid',
      boo: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  componentWillMount() {
    console.log('componentWillMount')
  }
  async handleClick() {
    let res = await Mutation.registerAsTeacher('123', '123')
    console.log('handleClick')
    console.log(res)
    this.setState(prevState => ({
      boo: !prevState.boo 
    }))
  }
  render() {
      return (
        <div>
          <div>{this.state.id}</div>
          <button onClick={this.handleClick} style={{width: 100, height: 200}}>
            {this.state.boo ? 'ON' : 'OFF'}
          </button>
        </div>
      )
  }
  componentDidMount() {
    console.log('componentDidMount')
    this.timerID = setInterval(
      () => this.setState({
        id: Math.random()
      })
    , 1000)
    
  }
  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate')
    return true
  }
  componentWillUpdate() {
    console.log('componentWillUpdate')
    
  }
  componentDidUpdate() {
    console.log('componentDidUpdate')

  }
  componentWillUnmount() {
    clearInterval(this.timerID)
  }
}

export default Navigator
