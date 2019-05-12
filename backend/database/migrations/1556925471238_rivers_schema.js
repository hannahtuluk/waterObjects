/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class RiversSchema extends Schema {
  up() {
    this.create('rivers', (table) => {
      table.increments();
      table.string('name', 254).notNullable();
      table.float('latitude').notNullable();
      table.float('longitude').notNullable();
      table.string('type');
      table.float('square');
      table.integer('bacterias_id').unsigned().references('id').inTable('bacterias')
        .onDelete('cascade')
        .onUpdate('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('rivers');
  }
}

module.exports = RiversSchema;
