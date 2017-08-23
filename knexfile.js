module.exports = {
  client: 'mysql2',
  connection: {
    database: 'personal_website',
    user: 'root',
    password: 'password',
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
}
