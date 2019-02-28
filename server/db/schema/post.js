const mongoose = require('../db')
const Schema = mongoose.Schema

const postSchema = new Schema({
  authorId: Schema.Types.ObjectId,
  tab: { type: Number, default: 0 },
  tag: [String],
  title: String,
  content: String,
  commentId: [
    Schema.Types.ObjectId
  ],
  createTime: {
    type: Date, default: Date.now
    // When it is created.
  }
})

module.exports = mongoose.model('post', postSchema, 'post')
