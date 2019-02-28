const mongoose = require('../db')
const Schema = mongoose.Schema

const chartSchema = new Schema({
  isReviewing: {
    type: Boolean, default: true
  },
  isPriced: {
    type: Boolean, default: false
  },
  price: {
    type: Number, default: 0
  },
  isPublic: {
    type: Boolean, default: false
  },
  isRanked: {
    type: Boolean, default: false
  },
  reviewerCount: {
    type: Number, default: 0
  },
  tag: [String],
  playCount: {
    type: Number, default: 0
    // Increased for every 100% online playing.
  },
  difficultyClass: {
    type: Number, default: 0
  },
  difficultyValue: {
    type: Number, default: 0
  },
  difficultyWeight: {
    type: Number, default: 0
  },
  ranking: [{
    playerId: Schema.Types.ObjectId,
    score: Number,
    perfect: Number,
    good: Number,
    miss: Number,
    createTime: Date
  }],
  charterId: Schema.Types.ObjectId,
  createTime: {
    type: Date, default: Date.now
    // When it is created.
  },
  publishTime: Date,
  // When it is published.
  setId: Schema.Types.ObjectId
})

module.exports = mongoose.model('chart', chartSchema, 'chart')
