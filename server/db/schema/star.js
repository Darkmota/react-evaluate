const mongoose = require('../db')
const Schema = mongoose.Schema

const starSchema = new Schema({
  userId: Schema.Types.ObjectId,
  setId: Schema.Types.ObjectId,
  createTime: {
    type: Date, default: Date.now
  },
  valid: {
    type: Boolean, default: true
  }
})

module.exports = mongoose.model('star', starSchema, 'star')
