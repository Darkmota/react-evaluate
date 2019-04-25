const express = require('express')
const fs = require('fs')
const path = require('path')
const router = express.Router()
const multer = require('multer')
const sharp = require('sharp')
const asyncMiddleware = require('../utils/asyncMiddleware').asyncMiddleware
const fileHandler = require('../utils/fileHandler')
const User = require('../db/schema/user')

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
  '/video',
  '/avatar',
  '/avatar/original',
  '/avatar/256x256_jpg'
]) {
  createFolder(path.join(__dirname, '../db/data' + name))
}

router.all('/*', asyncMiddleware(async (req, res, next) => {
  next()
}))
router.post('/avatar', upload.single('avatarFile'), asyncMiddleware(async (req, res, next) => {
  // temp
  req.user = {
    _id: '5c80cd1166e177522c81dd73'
  }
  console.log(req.file)
  let avatarFile = req.file
  try {
    let originalPath = path.join(__dirname, '../db/data/avatar/original/' + req.user._id + '.jpg')
    if (req.user.avatarExist) {
      try {
        await Promise.all([
          fileHandler.delete(path.join(__dirname, '../db/data/avatar/256x256_jpg/' + req.user._id + '.jpg')),
          fileHandler.delete(path.join(__dirname, '../db/data/avatar/original/' + req.user._id + '.jpg'))
        ])
      } catch (e) {
        // nothing
      }
    }
    await fileHandler.rename(avatarFile.path, originalPath)
    await sharp(originalPath)
      .resize(256, 256)
      .jpeg({
        quality: 75
      })
      .toFile(path.join(__dirname, '../db/data/avatar/256x256_jpg/' + req.user._id + '.jpg'))
    await User.findByIdAndUpdate(req.user._id, {
      $set: {
        avatarExist: true
      }
    })
  } catch (err) {
    if (err) {
      console.log('avatar upload err', err)
      res.status(500).send()
      return
    }
  }
  res.status(200).send()
}))

module.exports = router
