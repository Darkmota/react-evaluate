const mongoose = require('../db')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const eventSchema = new Schema({
  name: String,
  introduction: String,
  type: { type: Number, default: 0 },
  startTime: { type: Date, default: Date.now },
  endTime: { type: Date, default: Date.now },
  setId: ObjectId,
  endPoint: Number,
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('event', eventSchema, 'event')
