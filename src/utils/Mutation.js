import Axios from 'axios'
import Config from '../config/Config'

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
