exports.up = function(knex) {
  return knex.schema.createTable('fruits', tbl => {
    //   tbl.increments() //creates an id column, auto inc integers, PKey!
      tbl.increments('fruit_id')
      tbl.text('fruit_name', 256).unique().notNullable() //required and unique
      tbl.float('avg_weight').notNullable() //required
      tbl.boolean('is_delicious').defaultTo(true) //if not privded by the client, defaults to true
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits')
};
