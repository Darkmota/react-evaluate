const mongoose = require('../db')
const Schema = mongoose.Schema

const followSchema = new Schema({
  follow: [Schema.Types.ObjectId]
})

module.exports = mongoose.model('follow', followSchema, 'follow')
