const River = use('App/Models/River');
const Bulding = use('App/Models/Building');
const Bacterias = use('App/Models/Bacteria');

class RiverController {
  async index() {
    return 0;
  }

  async create({ request, response }) {
    const dataRiver = request.only([
      'name',
      'latitude',
      'longitude',
      'type',
      'square',
    ]);
    const dataBuilding = request.only('buildings');
    const dataBacterias = request.only('bacterias');

    console.log(dataRiver);
    console.log(dataBacterias);
    console.log(dataBuilding);

    const bacterias = await Bacterias.create(dataBacterias.bacterias);
    dataRiver.bacterias_id = bacterias.id;
    const river = await River.create(dataRiver);

    for (let i = 0; i < dataBuilding.buildings.length; i += 1) {
      dataBuilding.buildings[i].rivers_id = river.id;
      await Bulding.findOrCreate(dataBuilding.buildings[i]);
    }

    await river.loadMany(['buildings', 'bacterias']);

    return response.send({ river }, 'Fild successfully added to system');
  }

  async delete({ response, params }) {
    const river = await River.findByOrFail('id', params.id);
    river.delete();

    return response.send('River successfully deleted');
  }
}

module.exports = RiverController;
