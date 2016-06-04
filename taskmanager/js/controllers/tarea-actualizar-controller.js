angular.module("TareasApp")

.controller("TareaEditarController", function($scope, $routeParams, Tarea){
	
	var controller = this;
  	controller.tarea = Tarea.get({id: $routeParams.id});

	
	$scope.tarea = Tarea.get({id: $routeParams.id});
	this.actualizarTarea = function() {
	    console.log(this.tarea);
	    var controller = this;
	    controller.errors = null;
	    if(this.tarea.prioridad!=undefined){
	    	$scope.tarea.$update(this.tarea)/////////////resource
		    .catch(function(tarea) {
		      controller.errors = tarea.data.error;
		    })
		    this.tarea = {};
			window.location.href = "/#/tareas";
			alert('Tarea Editada correctamente');

	    } else {
	    	alert('Indique una prioridad');
	    }
	    
  	};
	
	


	
});



