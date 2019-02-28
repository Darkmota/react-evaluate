const mongoose = require('../db')
const Schema = mongoose.Schema

const bestScoreSchema = new Schema({
  userId: Schema.Types.ObjectId,
  setId: Schema.Types.ObjectId,
  difficultyClass: Number,
  score: Number,
  createTime: {
    type: Date, default: Date.now
  }
})

module.exports = mongoose.model('bestScore', bestScoreSchema, 'bestScore')
