const mongoose = require('../db')
const Schema = mongoose.Schema

const announcementSchema = new Schema({
  authorId: Schema.Types.ObjectId,
  title: String,
  content: String,
  postId: Schema.Types.ObjectId,
  createTime: {
    type: Date, default: Date.now
    // When it is created.
  }
})

module.exports = mongoose.model('announcement', announcementSchema, 'announcement')
