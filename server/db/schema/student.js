const mongoose = require('../db')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const newSchema = new Schema({
  id: String,
  classId: ObjectId,
  saltyPassword: String,
  salt: String,
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('student', newSchema, 'student')
