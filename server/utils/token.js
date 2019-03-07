let jwt = require('jwt-simple')
let key = require('../config/secret').jwt_secret

module.exports = {
  decode (token) {
    let preload = jwt.decode(token, key)
    if (preload) {
      return preload
    } else {
      return false
    }
  },
  encode (preload) {
    return jwt.encode(preload, key)
  }
}
