const mongoose = require('../db')
const Schema = mongoose.Schema

const followerSchema = new Schema({
  list: [Schema.Types.ObjectId]
})

module.exports = mongoose.model('follower', followerSchema, 'follower')
