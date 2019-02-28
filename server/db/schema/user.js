const mongoose = require('../db')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId

const userSchema = new Schema({
  username: String,
  saltyPassword: String,
  salt: String,
  lv: { type: Number, default: 1 },
  exp: { type: Number, default: 0 },
  isPlaying: { type: Boolean, default: false },
  playingRecord: {
    startTime: { type: Date, default: Date.now },
    playType: { type: Number, default: 0 },
    eventId: ObjectId,
    eventPlayArgs: { type: String, default: '' },
    ppCose: { type: Number, default: 0 },
    setId: ObjectId,
    chartId: ObjectId
  },
  R: { type: Number, default: 0 },
  bestRThisMonth: [{
    R: Number,
    chartId: ObjectId,
    playRecordId: ObjectId
  }],
  lastLogin: { type: Date, default: Date.now },
  avatarExist: { type: Boolean, default: false },
  gotSetId: [ObjectId],
  ownSetId: [ObjectId],
  coworkSetId: [ObjectId],
  follower: { type: Number, default: 0 },
  following: { type: Number, default: 0 },
  access: {
    admin: { type: Boolean, default: false },
    police: { type: Boolean, default: false },
    reviewer: { type: Boolean, default: false }
  },
  createTime: { type: Date, default: Date.now },
  DC: { type: Number, default: 1000 },
  DD: { type: Number, default: 0 },
  purchaseLock: { type: Boolean, default: false }
})

module.exports = mongoose.model('user', userSchema, 'user')
