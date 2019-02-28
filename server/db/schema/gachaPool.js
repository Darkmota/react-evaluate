const mongoose = require('../db')
const Schema = mongoose.Schema

const gachaPoolSchema = new Schema({
  name: String,
  instruction: String,
  coverExist: Boolean,
  poolList: [{
    chartId: Schema.Types.ObjectId,
    probability: Number
  }],
  createTime: {
    type: Date, default: Date.now
  },
  startTime: {
    type: Date, default: Date.now
  },
  endTime: Date
})

module.exports = mongoose.model('gachaPool', gachaPoolSchema, 'gachaPool')
