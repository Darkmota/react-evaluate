const teacherMutation = require('./mutation/teacherMutation')
const studentMutation = require('./mutation/studentMutation')
module.exports = {
  Mutation: {
    ...teacherMutation,

    ...studentMutation
  }
}
