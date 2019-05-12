/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Bacterias extends Model {
  bacterias() {
    return this.hasOne('App/Models/River', 'id', 'bacterias_id').orderBy('id');
  }
}

module.exports = Bacterias;
