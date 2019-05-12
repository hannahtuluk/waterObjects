/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BuildingsSchema extends Schema {
  up() {
    this.create('buildings', (table) => {
      table.increments();
      table.string('name', 254);
      table.string('type', 254);
      table.integer('rivers_id').unsigned().references('id').inTable('rivers')
        .onDelete('cascade')
        .onUpdate('cascade');
      table.timestamps();
    });
  }

  down() {
    this.drop('buildings');
  }
}

module.exports = BuildingsSchema;
