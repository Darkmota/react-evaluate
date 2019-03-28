import Axios from 'axios'
import Config from '../config/Config'

Axios.interceptors.request.use(
  config => {
    let token = window.localStorage.getItem('x-token')
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
    if (res.headers['set-token']) {
      window.localStorage.setItem('x-token', res.headers['x-token'])
    }
    return res
  })

const Mutation = {
  loginAsTeacher (id, password) {
    return Axios.post(`${Config.serverBase}/graphql`, {
      operationName: null,
      query: `
        mutation($id: String, $password: String) {
          loginAsTeacher(id: $id, password: $password) {
            _id
            id
            saltyPassword
            salt
          }
        }
       `,
      variables: {
        id: id,
        password: password
      }
    })
  },

  registerAsTeacher (id, password) {
    return Axios.post(`${Config.serverBase}/graphql`, {
      operationName: null,
      query: `
        mutation($id: String, $password: String) {
          registerAsTeacher(id: $id, password: $password) {
            _id
            id
            saltyPassword
            salt
          }
        }
       `,
      variables: {
        id: id,
        password: password
      }
    })
  }
}

export default Mutation
