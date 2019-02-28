const express = require('express')
const path = require('path')
const router = express.Router()
const asyncMiddleware = require('../utils/asyncMiddleware').asyncMiddleware

router.all('/:type/:field/:id', asyncMiddleware(async (req, res, next) => {
}))


module.exports = router
