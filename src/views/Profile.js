import React from 'react'
import Axios from 'axios'
import { updateAvatar } from '../actions'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { message, Form, Icon, Input, Button, Progress} from 'antd'
import { isUndefined } from 'util'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.inputFileRef = React.createRef()
    this.state = {
      inputFileBlob: null,
      uploadPercent: 0,
    }
  }

  onFileChange = async (event) => {
    let newFile = event.target.files[0]
    if (!isUndefined(newFile)) {
      this.setState({ inputFileBlob: newFile })
    }
  }

  onClickChooseFile = async (event) => {
    this.inputFileRef.current.click()
  }

  uploadFile = async (event) => {
    this.props.uploadAvatar(this)
  }

  clearFile = async (event) => {
    this.setState({ inputFileBlob: null })
  }

  render () {
    console.log(this.props)
    return (
      <>
        <h1>Profile</h1>
        <img src={`/download/avatar/256x256_jpg/${this.props.user._id}`} alt="" width="256" height="256"></img>
        {
          this.state.inputFileBlob
            ?
            <>
              <Button block type="primary" onClick={this.uploadFile}>上传文件</Button>
              <Button block type="primary" onClick={this.clearFile}>清除文件</Button>
              <Progress percent={this.state.uploadPercent}></Progress>
            </>
            :
            <Button block type="primary" onClick={this.onClickChooseFile}>选择文件</Button>

        }
        <input type="file" ref={this.inputFileRef} onChange={this.onFileChange.bind(this)} style={{ display: 'none' }}></input>
      </>
    )
  }
}

const mapStateToProps = state => ({
  _id: state._id,
  isLogin: state.isLogin,
  user: state.user,
  token: state.token
})

const mapStateToDispatch = dispatch => ({
  uploadAvatar: async (ctx) => {
    let config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        'x-token': ctx.props.token
      },
      onUploadProgress: progressEvent => {
        ctx.setState({ uploadPercent: progressEvent.loaded / progressEvent.total * 100 | 0})
        /*
        if (progressEvent.loaded === progressEvent.total) {
          this.createChartStep = 4
        }
        */
      }
    }
    try {
      let formData = new FormData()
      formData.append('avatarFile', ctx.state.inputFileBlob, this)
      Axios.post('/upload/avatar', formData, config)
        .then((res) => {
          message.info('更新头像成功！重新登录即可查看效果')
          ctx.forceUpdate()
        })
        .catch((err) => {
          message.error(err.response.statusText)
        })
      dispatch(updateAvatar({
        avatarExist: true
      }))
    } catch (e) {
      message.error(e)
    }
  }
})

export default withRouter(connect(mapStateToProps, mapStateToDispatch)(Profile))
