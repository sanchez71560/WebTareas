
angular.module('TareasApp')
.controller('TareasIndexController', function(Tarea) {
  var controller = this;
  controller.tareas = Tarea.query();
  console.log(controller.tareas);

});

  /*  Nota.todas()
  .success(function(data) {
    controller.notas = data;
  })*/

/*

angular.module('NotasApp')
.controller('NoteBorrarController', function($scope, Nota) {
  $scope.borrarNota = function(nota) {
  	Nota.$delete(nota);
  };
});



angular.module("NotasApp")
.controller("NotaEditarController", function($scope, $routeParams, Nota) {
  $scope.nota = Nota.get({id: $routeParams.id})
  $scope.actualizarNota = function(nota) {
  	$scope.errors = null;
	$scope.updating = true;
	nota.$update().catch(function(nota) {
	  $scope.errors = [nota.data.error];
	}).finally(function() {
	  $scope.actualizando = false;
	});
  };
});

*/