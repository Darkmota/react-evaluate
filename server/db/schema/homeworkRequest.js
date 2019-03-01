const mongoose = require('../db')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const newSchema = new Schema({
  classId: ObjectId,
  teacherId: String,
  startTime: Date,
  endTime: Date,
  title: String,
  content: { type: String, default: '没有正文' },
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('homeworkRequest', newSchema, 'homeworkRequest')
