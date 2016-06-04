

angular.module('TareasApp')
.controller('TareaNuevaController', function($scope, Tarea) {
  this.tarea = {};
  $scope.tarea = new Tarea();//////////////resource
  this.guardaNuevaTarea = function() {
    console.log(this.tarea);
    var controller = this;
    controller.errors = null;
    //console.log(this.tarea.title+" "+this.tarea.description+" "+this.tarea.prioridad+" "+this.tarea.autor+" "+this.tarea.fecha);

    if(this.tarea.prioridad!=undefined){
      $scope.tarea.$save(this.tarea)/////////////resource
      .catch(function(tarea) {
        controller.errors = tarea.data.error;
      })
      this.tarea = {};
      alert('Tarea creada!');
    } else {
      alert('Indique una prioridad');
    }

    
  };
});



