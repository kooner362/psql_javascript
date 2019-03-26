
exports.up = function(knex, Promise) {
    return Promise.all([
        knex.schema.table('milestones', function (table) {
            table.bigInteger('famous_people_id').references('id').inTable('famous_people')
           })
    ])
};

exports.down = function(knex, Promise) {
    return Promise.all([
        knex.schema.dropTable('milestones')
    ]);
};
