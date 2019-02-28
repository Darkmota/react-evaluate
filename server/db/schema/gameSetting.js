const mongoose = require('../db')
const Schema = mongoose.Schema

const gameSettingSchema = new Schema({
  judgement: {
    maxHp: Number,
    startHp: Number,
    perfect: Number,
    good: Number,
    miss: Number
  }
})

module.exports = mongoose.model('gameSetting', gameSettingSchema, 'gameSetting')
