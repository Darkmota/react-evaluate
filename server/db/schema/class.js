const mongoose = require('../db')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const newSchema = new Schema({
  name: String,
  studentId: [ObjectId],
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('class', newSchema, 'class')
