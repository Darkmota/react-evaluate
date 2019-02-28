const mongoose = require('../db')
const Schema = mongoose.Schema

const rateSchema = new Schema({
  userId: Schema.Types.ObjectId,
  chartId: Schema.Types.ObjectId,
  rate: Number,
  createTime: {
    type: Date, default: Date.now
  }
})

module.exports = mongoose.model('rate', rateSchema, 'rate')
