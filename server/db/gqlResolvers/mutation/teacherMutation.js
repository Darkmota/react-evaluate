module.exports = {
  loginAsTeacher: async (root, { id, password }, { db, auth, res, token }) => {
    const teacher = await db.Teacher.findOne({
      id: id
    })
    if (teacher.saltyPassword === auth.encryptPassword(password, teacher.salt)) {
      res.setHeader('x-token', token.encode({
        id: teacher.id,
        expires_in: Date.now() + 3600000
      }))
      return teacher
    } else {
      throw new Error('用户名或密码错误')
    }
  },

  registerAsTeacher: async (root, { id, password }, { db, auth, token, res }) => {
    const teacher = await db.Teacher.findOne({ id: id })
    if (teacher !== null) {
      throw new Error('用户已存在')
    } else {
      if (id.length < 1 || id.length > 20) {
        throw new Error('ID长度不符')
      }
      if (password.length < 1 || password.length > 20) {
        throw new Error('密码长度不符')
      }
      let salt = auth.generateRandomString(8)
      let newTeacherRes = await db.Teacher.create({
        id: id,
        saltyPassword: auth.encryptPassword(password, salt),
        salt: salt
      })
      res.setHeader('x-token', token.encode({
        id: id,
        expires_in: Date.now() + 3600000
      }))
      return newTeacherRes
    }
  },
}
