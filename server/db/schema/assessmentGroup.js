const mongoose = require('../db')
const Schema = mongoose.Schema

const assessmentGroupSchema = new Schema({
  metalLevel: {
    type: Number, default: 1
  },
  lifeBarLength: {
    type: Number, default: 100
  },
  normalPassAcc: {
    type: Number, default: 0
  },
  goldenPassAcc: {
    type: Number, default: 0
  },
  chartId: [Schema.Types.ObjectId],
  createTime: {
    type: Date, default: Date.now
  }
})

module.exports = mongoose.model('assessmentGroup', assessmentGroupSchema, 'assessmentGroup')
