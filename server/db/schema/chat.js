const mongoose = require('../db')
const Schema = mongoose.Schema

const chatSchema = new Schema({
  content: String,
  sendTime: {
    type: Date, default: Date.now
  },
  senderId: Schema.Types.ObjectId
})

chatSchema.index({
  sendTime: -1,
  expires: 1/* day */* 24 * 3600 * 1000
})

module.exports = mongoose.model('chat', chatSchema, 'chat')
