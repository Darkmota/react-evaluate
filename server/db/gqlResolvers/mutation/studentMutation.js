module.exports = {
  loginAsStudent: async (root, { id, password }, { db, auth, res, token }) => {
    const student = await db.Student.findOne({
       id: id
    })
    if (student === null) {
      throw new Error('学生不存在！')
    }
    if (student.saltyPassword === auth.encryptPassword(password, student.salt)) {
      res.setHeader('set-token', token.encode({
        id: student.id,
        expires_in: Date.now() + 3600000
      }))
      return student
    } else {
      throw new Error('用户名或密码错误')
    }
  },

  registerAsStudent: async (root, { id, password }, { db, auth, token, res }) => {
    const student = await db.Student.findOne({ id: id })
    if (student !== null) {
      throw new Error('用户名已存在')
    } else {
      if (id.length < 1 || id.length > 20) {
        throw new Error('用户名长度不符')
      }
      if (password.length < 1 || password.length > 20) {
        throw new Error('用户名长度不符')
      }
      let salt = auth.generateRandomString(8)
      let newStudentRes = await db.student.create({
        id: id,
        saltyPassword: auth.encryptPassword(password, salt),
        salt: salt
      })
      res.setHeader('x-token', token.encode({
        id: id,
        expires_in: Date.now() + 3600000
      }))
      return newStudentRes
    }
  }
}
