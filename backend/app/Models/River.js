/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class River extends Model {
  buildings() {
    return this.hasMany('App/Models/Building', 'id', 'rivers_id').orderBy('id');
  }

  bacterias() {
    return this.hasOne('App/Models/Bacteria', 'bacterias_id', 'id').orderBy('id');
  }
}

module.exports = River;
