/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class BacteriasSchema extends Schema {
  up() {
    this.create('bacterias', (table) => {
      table.increments();
      table.bool('micrococcus_candicans');
      table.bool('sarcina_litea');
      table.bool('pseudomonas_fluorescens');
      table.bool('proteus');
      table.bool('leptospira');
      table.bool('clostridium');
      table.timestamps();
    });
  }

  down() {
    this.drop('bacterias');
  }
}

module.exports = BacteriasSchema;
