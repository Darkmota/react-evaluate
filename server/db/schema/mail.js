const mongoose = require('../db')
const Schema = mongoose.Schema

const mailSchema = new Schema({
  sendTime: {
    type: Date, default: Date.now
  },
  read: {
    type: Boolean, default: false
  },
  expireTime: Date,
  senderId: Schema.Types.ObjectId,
  recevierId: Schema.Types.ObjectId
})

mailSchema.index({
  sendTime: -1,
  expires: 7/* day */* 24 * 3600 * 1000
})

module.exports = mongoose.model('mail', mailSchema, 'mail')
