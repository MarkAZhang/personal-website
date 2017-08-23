module.exports = {
  client: 'mysql2',
  connection: 'mysql://root:password@mysql:3306/personal_website?charset=utf8mb4',
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './migrations',
  },
}
