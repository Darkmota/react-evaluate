const mongoose = require('../db')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId
const reviewRequestSchema = new Schema({
  isCreate: Boolean,
  setId: ObjectId,
  musicTitle: String,
  ownerId: ObjectId,
  status: { type: Number, default: 0 },
  tag: [String],
  acceptReviewerId: [ObjectId],
  review: [{
    type: Number, // 0: normal,
    reviewerId: [ObjectId],
    content: String
  }],
  status: { type: Number, default: 0 },
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('reviewRequest', reviewRequestSchema, 'reviewRequest')
