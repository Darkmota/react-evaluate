const mongoose = require('../db')
const Schema = mongoose.Schema

const musicSchema = new Schema({
  musicName: String,
  musicFileExist: {
    type: String, default: false
  },
  composerId: Schema.Types.ObjectId,
  musicLength: Number,
  BPMChange: {
    type: Boolean, default: false
  },
  musicBPM: Number,
  introduction: String,
  tag: [String]
})

module.exports = mongoose.model('music', musicSchema, 'music')
