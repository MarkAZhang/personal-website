/* eslint-disable */
var config = require('./config')

module.exports = {
  client: 'mysql2',
  connection: config.getSqlConnection(),
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
}
