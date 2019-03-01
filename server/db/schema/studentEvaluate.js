const mongoose = require('../db')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const newSchema = new Schema({
  studentId: ObjectId,
  homeworkResponseId: ObjectId,
  score: Number,
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('studentEvaluation', newSchema, 'studentEvaluation')
