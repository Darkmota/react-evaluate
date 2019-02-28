const mongoose = require('../db')
const Schema = mongoose.Schema

const playRecordRankingSchema = new Schema({
  playerId: Schema.Types.ObjectId,
  chartId: Schema.Types.ObjectId,
  score: Number,
  perfect: Number,
  good: Number,
  miss: Number,
  createTime: {
    type: Date, default: Date.now
    // When it is created.
  }
})

playRecordRankingSchema.index({
  score: -1
})

module.exports = mongoose.model('playRecordRanking', playRecordRankingSchema, 'playRecordRanking')
