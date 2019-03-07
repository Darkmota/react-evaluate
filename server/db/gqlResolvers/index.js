const merge = require('lodash').merge
const Querys = require('./Querys')
const Mutations = require('./Mutations')
module.exports = merge(Querys, Mutations)
