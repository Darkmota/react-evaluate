const mongoose = require('../db')
const Schema = mongoose.Schema

const setSchema = new Schema({
  musicTitle: String,
  ownerId: Schema.Types.ObjectId,
  composerName: String,
  chartFileHash: [String],
  previewFileHash: String,
  musicFileHash: String,
  coverFileHash: String,
  isOfficial: { type: Boolean, default: false },
  isEvent: { type: Boolean, default: false },
  isSale: { type: Boolean, default: false },
  DCPrice: { type: Number, default: 0 },
  isRanked: { type: Boolean, default: false },
  isReviewing: { type: Boolean, default: true },
  isHidden: { type: Boolean, default: true },
  playCount: { type: Number, default: 0 },
  musicIsBPMChange: { type: Boolean, default: false },
  musicBPM: { type: Number, default: 120 },
  introduction: { type: String, default: 'No introduction' },
  chartFileAllowDownload: { type: Boolean, default: false },
  chartId: [Schema.Types.ObjectId],
  createTime: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false }
})

module.exports = mongoose.model('set', setSchema, 'set')
