const mongoose = require('../db')
const Schema = mongoose.Schema

const newSchema = new Schema({
  name: String,
  scoreProportion: {
    studentProportion: Number,
    classmateProportion: Number,
    teacherProportion: Number,
  },
  evaluateWeight: [{
    name: String,
    score: Number,
    subEvaluateWeight: [{
      name: String,
      score: Number
    }]
  }],
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('evaluateSetting', newSchema, 'evaluateSetting')
