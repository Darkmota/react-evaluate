const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const multer = require('multer')
const asyncMiddleware = require('../utils/asyncMiddleware').asyncMiddleware

console.log('File save path:', path.join(__dirname, '../db/data/'))

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../db/data/temp'))
  },
  filename: (req, file, cb) => {
    if (!req.randomId) {
      req.randomId = Math.random()
    }
    cb(null, req.randomId + '.' + file.fieldname.toLocaleLowerCase())
  }
})

let upload = multer({storage: storage})

const createFolder = (folder) => {
  try {
    fs.accessSync(folder)
  } catch (err) {
    if (!err) {
      fs.mkdirSync(folder, 511)
    }
  }
}
for (let name of [
  '/ppt',
  '/word',
  '/video'
]) {
  createFolder(path.join(__dirname, '../db/data' + name))
}

router.all('/*', asyncMiddleware(async (req, res, next) => {
  next()
}))


module.exports = router
