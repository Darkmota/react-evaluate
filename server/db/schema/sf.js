const mongoose = require('../db')
const Schema = mongoose.Schema

const sfSchema = new Schema({
  followerId: Schema.Types.ObjectId,
  followId: Schema.Types.ObjectId,
  createTime: {
    type: Date, default: Date.now
  }
})

module.exports = mongoose.model('sf', sfSchema, 'sf')
