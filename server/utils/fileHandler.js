const secret = require('../config/secret')
const crypto = require('crypto')
const fs = require('fs')
const path = require('path')

const decode = (buffer) => {
  let decipher = crypto.createDecipheriv('aes-192-cbc', secret.fileAESKey, secret.fileAESIv)
  decipher.setAutoPadding(true)
  let decoded = []
  decoded.push(decipher.update(buffer))
  decoded.push(decipher.final())
  return Buffer.concat(decoded)
}

const encode = (buffer) => {
  let cipher = crypto.createCipheriv('aes-192-cbc', secret.fileAESKey, secret.fileAESIv)
  cipher.setAutoPadding(true)
  let encoded = []
  encoded.push(cipher.update(buffer))
  encoded.push(cipher.final())
  return Buffer.concat(encoded)
}

const readFile = function (pathname) {
  return new Promise((resolve, reject) => {
    fs.readFile(pathname, (error, data) => {
      if (error) {
        return reject(error)
      }
      resolve(data)
    })
  })
}

const writeFile = function (pathname, buffer) {
  return new Promise((resolve, reject) => {
    fs.writeFile(pathname, buffer, 'binary', (error) => {
      if (error) {
        return reject(error)
      }
      resolve()
    })
  })
}

const readFileAndEncode = async (pathname, newPathname) => {
  return new Promise(async (resolve, reject) => {
    let buffer = await readFile(pathname)
    let encoded = encode(buffer)
    let fsHash = crypto.createHash('md5')
    let md5 = fsHash.update(encoded).digest('hex')
    try {
      await writeFile(newPathname, encoded)
    } catch (err) {
      if (err) {
        console.error(err)
        reject(err)
      }
    }
    resolve(md5)
  })
}

const readFileAndGetHashAsync = async (pathname) => {
  return new Promise(async (resolve, reject) => {
    let buffer = await readFile(pathname)
    let fsHash = crypto.createHash('md5')
    let md5 = fsHash.update(buffer).digest('hex')
    resolve(md5)
  })
}

const readFileAndDecode = async (pathname, newPathname) => {
  return new Promise(async (resolve, reject) => {
    try {
      let buffer = await readFile(pathname)
      let decoded = decode(buffer)
      await writeFile(newPathname, decoded)
    } catch (err) {
      if (err) {
        console.error(err)
        reject(err)
      }
    }
    resolve()
  })
}
/**
* fileHeader.delete
*
* Delete a file
*
* @param    {string}  pathname - Absolute path of file
* @returns  {function} - A promise
*/
const _delete = (pathname) => {
  return new Promise((resolve, reject) => {
    fs.access(pathname, (error) => {
      if (error !== null && error.code === 'ENOENT') {
        resolve()
      } else {
        fs.unlink(pathname, (error) => {
          if (error) {
            reject(error)
          }
          resolve()
        })
      }
    })
  })
}

module.exports = {
  encode: encode,
  decode: decode,
  readFile: readFile,
  writeFile: writeFile,
  readFileAndEncode: readFileAndEncode,
  readFileAndDecode: readFileAndDecode,
  delete: _delete,
  readFileAndEncodeAsync (pathname, newPathname) {
    return new Promise(async (resolve, reject) => {
      let md5 = null
      try {
        md5 = await readFileAndEncode(pathname, newPathname)
      } catch (err) {
        if (err) {
          reject(err)
        }
      }
      resolve(md5)
    })
  },
  readFileAndGetHashAsync: readFileAndGetHashAsync,
  readFileAndDecodeAsync (pathname, newPathname) {
    return new Promise(async (resolve, reject) => {
      try {
        await readFileAndDecode(pathname, newPathname)
      } catch (err) {
        if (err) {
          reject(err)
        }
      }
      resolve()
    })
  },
  rename (pathname, newPathname) {
    return new Promise((resolve, reject) => {
      fs.rename(pathname, newPathname, (error) => {
        if (error) {
          return reject(error)
        }
        resolve()
      })
    })
  },
  exist (pathname) {
    return new Promise((resolve, reject) => {
      fs.access(pathname, (error) => {
        if (error) {
          reject(error)
        } else {
          resolve()
        }
      })
    })
  }
}
