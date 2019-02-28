const mongoose = require('../db')
const Schema = mongoose.Schema

const starSchema = new Schema({
  authorId: Schema.Types.ObjectId,
  tab: String,
  content: String,
  postId: Schema.Types.ObjectId,
  createTime: {
    type: Date, default: Date.now
    // When it is created.
  }
})

module.exports = mongoose.model('comment', starSchema, 'comment')
