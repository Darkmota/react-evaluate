let Token = require('./token')
let Status = require('./status').create
let Crypto = require('crypto')

const expireTime = 3600000
const updateLeftTime = 1800000

module.exports = {
  encryptPassword (password, salt) {
    return Crypto.createHash('sha256').update(password + salt).digest('base64')
  },
  generateRandomString (len) {
    let time = Date.now() % 100
    let str = ''
    time = time === 0 ? '00' : String(time)
    for (let i = 0; i < len; i++) {
      const base = Math.random() < 0.5 ? 65 : 97
      str += String.fromCharCode(
        base + Math.floor(Math.random() * 26)
      )
    }
    return time + str
  },
  checkStatus (token) {
    let payload = false
    try {
      payload = Token.decode(token)
    } catch (err) {
      if (err) {
        return Status(-2, 'token无效', null, true)
      }
    }
    if (payload) {
      let now = Date.now()
      // 过期
      if (payload.expires_time + expireTime < now) {
        return Status(-1, 'token已过期，请重新登录', null, true)
      } else if (payload.expires_time + updateLeftTime >= now) {
        // 该token离过期还有小于30分钟, 需要更新
        return Status(1, 'token有效但需要自动续期', {
          token: Token.encode({
            id: payload.id,
            expires_in: Date.now() + expireTime
          }),
          ...payload
        }, true)
      } else {
        return Status(0, 'token有效', payload, true)
      }
    } else {
    // 你这token哪来的啊
      return Status(-2, 'token无效', null, true)
    }
  }
}
