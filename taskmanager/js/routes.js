
angular.module('TareasApp')
.config(function($routeProvider){

  $routeProvider

  .when('/', {
    redirectTo: '/tareas'
  })

  .when('/tareas', {
    templateUrl: '/templates/pages/tareas/index.html',
    controller: 'TareasIndexController',
    controllerAs: 'TareasIndex'
  })

  .when('/usuarios', {
    templateUrl: '/templates/pages/usuarios/index.html',
    controller: 'UsuariosIndexController',
    controllerAs: 'UsuariosIndex'
  })

  .when('/tareas/nueva', {
      templateUrl: 'templates/pages/tareas/nueva.html',
      controller: 'TareaNuevaController',
      controllerAs: 'tareaNuevaCtrl'
    })

  .when('/tareas/:id', {
    templateUrl: 'templates/pages/tareas/tarea-show.html',
    controller: 'TareaShowController',
    controllerAs: 'tareaShowCtrl'
  })

  .when('/editar/:id', {
    templateUrl: 'templates/pages/tareas/editar.html',
    controller: 'TareaEditarController',
    controllerAs: 'tareaEditarCtrl'
  })

  

  .otherwise({redirectTo: '/'});

});
