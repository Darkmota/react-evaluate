const mongoose = require('../db')
const Schema = mongoose.Schema

const playRecordSaveSchema = new Schema({
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

playRecordSaveSchema.index({
  score: -1
})

module.exports = mongoose.model('playRecordSave', playRecordSaveSchema, 'playRecordSave')
