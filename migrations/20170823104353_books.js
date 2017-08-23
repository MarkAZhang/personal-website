/* eslint-disable */
exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('books', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('author')
    table.string('link')
    table.timestamps()
  })
  .then(() => {
    return knex('books').insert([{
      name: 'The Righteous Mind',
      author: 'Jonathan Haidt'
    }, {
      name: 'Thinking Fast and Slow',
      author: 'Daniel Kahneman'
    }])
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('books')
};
