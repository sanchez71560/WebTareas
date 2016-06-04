
angular.module("TareasApp")
.factory("Usuario", function UsuarioFactory($resource) {
  return $resource("/usuarios/:id", {}, {
    update: {
    method: "PUT"
    }
  });
});

