const mongoose = require('../db')
const Schema = mongoose.Schema

const systemSchema = new Schema({
  carousel: [
    {
      imageSrc: String,
      link: String,
      title: String,
      content: String
    }
  ],
  totalRankingId: [String],
  playCount: {
    type: Number,
    default: 0
  },
  userCount: {
    type: Number,
    default: 0
  },
  blackIPList: [String]
})

module.exports = mongoose.model('system', systemSchema, 'system')
