/* eslint-disable */
var env = require('process').env
var dotenv = require('dotenv')

var nodeEnv = env.NODE_ENV
console.log('env', env.NODE_ENV)

// In prod, the .env file is manually placed in the parent directory.
// The Dockerfile then pulls it in.
if (nodeEnv === 'prod') {
  dotenv.load({path: './.env.prod'})
} else {
  console.log('loading dev')
  dotenv.load({path: './.env.dev'})
}

function getSqlConnection() {
  var temp = `mysql://${env.MYSQL_USER}:${env.MYSQL_PASSWORD}@${env.MYSQL_HOST}:${env.MYSQL_PORT}/personal_website?charset=utf8mb4`
  console.log('sql is', temp)
  return temp
}

module.exports = {
  getSqlConnection: getSqlConnection,
}
