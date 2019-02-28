const mongoose = require('../db')
const Schema = mongoose.Schema

const complaintSchema = new Schema({
  userId: Schema.Types.ObjectId,
  title: String,
  context: String,
  createTime: {
    type: Date, default: Date.now
  },
  result: {
    type: String, default: 'unhandled'
  }
})

module.exports = mongoose.model('complaint', complaintSchema, 'complaint')
