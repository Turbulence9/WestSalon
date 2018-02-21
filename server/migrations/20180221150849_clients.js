exports.up = function(knex, Promise) {
  return knex.schema.createTable('clients',(t) => {
    t.increments();
    t.text('firstName');
    t.text('lastName');
    t.text('phoneNumber');
    t.text('email');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('clients');
};
