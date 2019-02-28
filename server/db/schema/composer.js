const mongoose = require('../db')
const Schema = mongoose.Schema

const composerSchema = new Schema({
  composerName: String,
  tag: [String],
  introduction: String,
  ownMusic: [Schema.Types.ObjectId]
})

module.exports = mongoose.model('composer', composerSchema, 'composer')
