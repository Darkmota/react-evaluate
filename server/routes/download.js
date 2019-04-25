const express = require('express')
const path = require('path')
const router = express.Router()
const fileHandler = require('../utils/fileHandler')
const asyncMiddleware = require('../utils/asyncMiddleware').asyncMiddleware

router.all('/:type/:field/:id', asyncMiddleware(async (req, res, next) => {
  let contentType = ''
  let suffix = ''
  try {
    switch (req.params.type) {
      case 'avatar':
        contentType = 'image/jpg'
        suffix = 'jpg'
        break
      default:
        res.sendStatus(500)
        break
    }
    let filePath = path.join(__dirname, '../db/data/' + req.params.type + '/' + req.params.field + '/' + req.params.id + '.' + suffix)
    console.log('Fetch file: ' + filePath)
    await fileHandler.exist(filePath)
    let fileBuffer = await fileHandler.readFile(filePath)
    res.writeHead(200, {
      'Content-Disposition': `attachment;filename=${req.params.id}.${suffix}`,
      'Content-Type': contentType,
      'Content-Length': fileBuffer.length
    })
    res.write(fileBuffer, 'binary')
    res.end()
  } catch (err) {
    res.sendStatus(500)
  }
}))


module.exports = router
