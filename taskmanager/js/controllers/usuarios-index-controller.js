
/*usuarios = [{
  name: 'Juan Pedro',
  bio: 'Maecenas tempus tellus eget',
  email: 'marko.galarza@gmail.com'
  },
  {
  name: 'Félix',
  bio: 'Lorem ipsum dolor sit amet',
  email: 'marko.galarza@gmail.com'
  },
  {
  name: 'Luis',
  bio: 'Sed cursus turpis vitae tortor',
  email: 'marko.galarza@gmail.com'
  },
  {
  name: 'Mario',
  bio: 'Mut a nisl id ante ipsum primis',
  email: 'marko.galarza@gmail.com'
}];*/

angular.module('TareasApp')
.controller('UsuariosIndexController', function(Usuario) {
  var controller = this;
  controller.usuarios = Usuario.query();
  console.log(controller.usuarios);
  
});



