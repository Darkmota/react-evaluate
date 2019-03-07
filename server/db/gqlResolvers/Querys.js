const teacherQuery = require('./query/teacherQuery')
const studentQuery = require('./query/studentQuery')

module.exports = {
  Query: {
    teacherById: async (root, { _id }, { db }) =>
      db.Teacher.findById(_id),

    studentById: async (root, { _id }, { db }) =>
      db.Student.findById(_id),
  },
  Teacher: teacherQuery,

  Student: studentQuery
}
