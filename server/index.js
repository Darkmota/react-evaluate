const requireGraphQLFile = require('require-graphql-file')
const { MongoClient } = require('mongodb')
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const express = require('express')
const http = require('http')
const cors = require('cors')
const asyncMiddleware = require('./utils/asyncMiddleware').asyncMiddleware

const Auth = require('./utils/auth')
const Token = require('./utils/token')
const Settings = require('./config/settings')
const Student = require('./db/schema/student')
const Teacher = require('./db/schema/teacher')

const {ApolloServer} = require('apollo-server-express')
const app = express()

function getClientIp (req) {
  return req.headers['x-forwarded-for'] ||
  req.connection.remoteAddress ||
  req.socket.remoteAddress ||
  req.connection.socket.remoteAddress
}

const start = async () => {
  try {
    await MongoClient.connect('mongodb://127.0.0.1/evaluation', { useNewUrlParser: true })

    const typeDefs = [
      requireGraphQLFile('./db/gqlSchema/std/scalar'),
      requireGraphQLFile('./db/gqlSchema/std/Query'),
      requireGraphQLFile('./db/gqlSchema/std/Mutation'),
      requireGraphQLFile('./db/gqlSchema/business/class'),
      requireGraphQLFile('./db/gqlSchema/business/classmateEvaluation'),
      requireGraphQLFile('./db/gqlSchema/business/evaluationSetting'),
      requireGraphQLFile('./db/gqlSchema/business/homeworkRequest'),
      requireGraphQLFile('./db/gqlSchema/business/homeworkResponse'),
      requireGraphQLFile('./db/gqlSchema/business/student'),
      requireGraphQLFile('./db/gqlSchema/business/studentEvaluation'),
      requireGraphQLFile('./db/gqlSchema/business/teacher'),
      requireGraphQLFile('./db/gqlSchema/business/teacherEvaluation')
    ]

    const typeResolvers = require('./db/gqlTypeResolvers')
    const resolvers = require('./db/gqlResolvers')
    /*
    const schema = makeExecutableSchema({
      typeDefs,
      typeResolvers,
      resolvers
    })
    */
    const GraphQLserver = new ApolloServer({
      // debug: false,
      typeDefs,
      typeResolvers,
      resolvers,
      context: ({ req, res }) => {
        return {
          db: {
            Teacher: Teacher,
            Student: Student
          },
          settings: Settings,
          auth: Auth,
          token: Token,
          user: req.user,
          tokenErrorMessage: req.tokenErrorMessage,
          res: res
        }
      }
    })

    app.use(cors())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended: false}))
    app.use((err, req, res, _next) => {
      if (err) {
        res.status(401)
      }
    })
    app.all('*', urlencodedParser, asyncMiddleware(async (req, res, next) => {
      console.log('URL: ' + req.url)
      console.log('IPv4: ' + getClientIp(req).split(':')[3])
      /*
      res.header('Access-Control-Allow-Origin', '*')
      res.header('Access-Control-Allow-Headers', '*')
      res.header('Access-Control-Allow-Methods', 'POST,GET,OPTIONS')
      res.header('X-Powered-By', ' 3.2.1')
      res.header('Content-Type', 'application/jsoncharset=utf-8')
      */
      if (req.method.toLocaleLowerCase() === 'options') {
        res.status(200)
        return res.json({}) // 对于options直接返回空数据，结束此次请求
      }

      let status = false
      if (req.headers['x-token']) {
        status = Auth.checkStatus(req.headers['x-token'])
      }
      if (req.query['token']) {
        status = Auth.checkStatus(req.query['token'])
      }
      if (status) {
        // console.log('checkStatus: ', status)
        switch (0) {
          case -1: // 过期
            req.tokenErrorMessage = 'Expired token'
            break
          case -2: // 无(效)token
            req.tokenErrorMessage = 'Illegal token string'
            break
          case 1: // 有效但需续期
            req.user = await User.findOne({id: status.payload.id})
            res.setHeader('x-token', status.payload.token)
            break
          case 0: // 有效
            req.user = await User.findOne({id: status.payload.id})
            break
          default:
            break
        }
      }
      next()
    }))

    const download = require('./routes/download')
    const upload = require('./routes/upload')
    app.use('/download', download)
    app.use('/upload', upload)

    GraphQLserver.applyMiddleware({ app })

    app.set('port', 3030)

    const server = http.createServer(app)

    server.on('error', (err) => {
      if (err) {
        console.log('Server error: ' + err)
      }
    })
    server.on('listening', () => {
      let addr = server.address()
      let bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port
      console.log('Server listening on: ' + bind)
    })
    server.listen(3030)

  } catch (e) {
    console.log(e)
  }
}

start()
