const BaseValidator = use('App/Validators/BaseValidator');

class RiverCreate extends BaseValidator {
  get rules() {
    return {
      name: 'required|string|max:254',
      latitude: 'required|number',
      longitude: 'required|number',
      type: 'required|string|max:254',
      square: 'required|number',
      buildings: 'array',
      bacterias: 'object',
    };
  }
}

module.exports = RiverCreate;
