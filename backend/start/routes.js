/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route');


Route.group(() => {
  // River

  Route.post('river', 'RiverController.create').validator('River/RiverCreate');
  Route.delete('river/:id', 'RiverController.delete');
  Route.get('river/:id', 'RiverController.show');
  Route.get('river', 'RiverController.index').validator('River/RiverIndex');
  Route.put('river', 'RiverController.update').validator('River/RiverUpdate');
}).namespace('River');
