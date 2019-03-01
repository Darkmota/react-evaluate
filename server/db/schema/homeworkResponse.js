const mongoose = require('../db')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const newSchema = new Schema({
  homeworkRequestId: [ObjectId],
  studentId: ObjectId,
  title: String,
  pptFileExist: { type: Boolean, default: false },
  wordFileExist: { type: Boolean, default: false },
  videoFileExist: { type: Boolean, default: false },
  studentEvaluateId: [ObjectId],
  teacherEvaluateId: [ObjectId],
  classmateEvaluateId: [ObjectId],
  isSubmited: { type: Boolean, default: false },
  submitTime: Date,
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('classmateEvaluate', newSchema, 'classmateEvaluate')
