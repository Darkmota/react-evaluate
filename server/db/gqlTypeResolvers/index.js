const merge = require('lodash').merge
const scalars = require('./scalars')
const types = require('./types')
const interfaces = require('./interfaces')
const unions = require('./unions')

module.exports = merge(scalars, types, interfaces, unions)
