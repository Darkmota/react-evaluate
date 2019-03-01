const mongoose = require('../db')
const Schema = mongoose.Schema

const newSchema = new Schema({
  name: String,
  id: String,
  saltyPassword: String,
  salt: String,
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('student', newSchema, 'student')
