exports.seed = function(knex) { //dependency injection
  // Deletes ALL existing entries
  return knex('fruits').truncate() // reset primary keys
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        { fruit_name: 'apple', avg_weight: 10.5, is_delicious: true }, //DELETE THE IDS!!!!
        { fruit_name: 'orange', avg_weight: 4.5, is_delicious: false },
        { fruit_name: 'strawberry', avg_weight: 1.5, is_delicious: false }
      ]);
    });
};
