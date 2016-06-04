

angular.module('TareasApp')
  .directive('naElementoUsuario', function(){
    return {
      restrict: 'E',
      templateUrl: '/templates/directives/na-elemento-usuario.html',
      scope: {
        nombre: '=',
        description: '=',
        apellido: '=',
        edad: '=',
        id: '='
      },
      /*controller: function($scope, Nota){

        this.nota = {};
        $scope.nota = new Nota();//////////////resource
        
        $scope.borrarTarea = function() {
          (($('#'+$scope.id).parent()).parent()).remove();
          this.notan = {borrar:true, _id:$scope.id};

          var controller = this;
          controller.errors = null;
          $scope.nota.$save(this.notan)/////////////resource
          .catch(function(nota) {
            controller.errors = nota.data.error;
          })

        };
      },*/
      
      /*link: function(scope, element, attrs){
        element.on("click", function(){
          element.find("p.toggle").toggleClass('hidden');
        });      
      }*/
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