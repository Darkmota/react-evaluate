module.exports = {
  create: (code, msg, payload, dontStringify) => {
    return {
      code: code,
      msg: msg,
      payload: dontStringify ? payload : JSON.stringify(payload)
    }
  }
}
