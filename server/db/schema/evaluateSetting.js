const mongoose = require('../db')
const Schema = mongoose.Schema

const newSchema = new Schema({
  name: String,
  scoreProportion: {
    studentProportion: Number,
    classmateProportion: Number,
    teacherProportion: Number,
  },
  evaluationWeight: [{
    name: String,
    score: Number,
    subEvaluationWeight: [{
      name: String,
      score: Number
    }]
  }],
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('evaluationSetting', newSchema, 'evaluationSetting')
