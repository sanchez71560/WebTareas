

angular.module('TareasApp')
  .directive('naElementoTarea', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/na-elemento-tarea.html',
      scope: {
        title: '=',
        description: '=',
        nombre: '=',
        fecha: '=',
        prioridad: '=',
        id: '='
      },
      controller: function($scope, Tarea){

        this.tarea = {};
        $scope.tarea = new Tarea();//////////////resource
        
        $scope.borrarTarea = function() {
          (($('#'+$scope.id).parent()).parent()).remove();
          this.tarean = {borrar:true, _id:$scope.id};

          var controller = this;
          controller.errors = null;
          $scope.tarea.$delete(this.tarean)/////////////resource
          .catch(function(tarea) {
            controller.errors = tarea.data.error;
          })

        };
      },
    };
  });


//console.log(attrs.content);
      /*link: function(){
        $("div.card").on("click", function(){
          $("div.card p").removeClass('hidden');
        });
      }*/

      /*controller: function(){
        this.cabecera = 'Título común';
      },
      controllerAs: 'elementoNota'*/