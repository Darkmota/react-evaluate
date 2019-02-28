const mongoose = require('../db')
const Schema = mongoose.Schema

const rankingSchema = new Schema({
  ranking: [{
    playerId: Schema.Types.ObjectId,
    score: Number,
    createTime: Date
  }]
})

module.exports = mongoose.model('ranking', rankingSchema, 'ranking')
