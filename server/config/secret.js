module.exports = {
  jwt_secret: Buffer.from('aaa869904047bfe77005739bbb', 'hex'),
  db_address: 'mongodb://evaluationRoot:1qazxsw2@dynamite.dynami.tech/evaluation',
  local_test: false,
  local_address: 'mongodb://127.0.0.1/evaluation',
  fileAESKey: Buffer.from([
    72, 46, 52, 123,
    14, 67, 241, 129,
    217, 187, 4, 27,
    34, 169, 159, 16,
    163, 83, 17, 98,
    197, 254, 1, 9
  ]),
  fileAESIv: Buffer.from([
    114, 51, 4, 19,
    19, 81, 0, 233,
    13, 84, 204, 76,
    65, 75, 83, 44
  ])
}
