/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Building extends Model {
  river() {
    return this.hasOne('App/Models/Actor', 'rivers_id', 'id').orderBy('id');
  }
}

module.exports = Building;
