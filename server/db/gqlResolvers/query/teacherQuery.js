module.exports = {
  homeworkResponse: ({ _id }, { skip, limit }, { db }) =>
    db.HomeworkResponse.find({
      teacherId: _id
    })
      .limit(limit)
      .skip(skip)
}
