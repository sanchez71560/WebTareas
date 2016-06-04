var express = require('express');
var app = express();


app.use(express.static('taskmanager'));


/************* BASE DE DATOS MONGODB *****************/
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var Usuario = new Schema({
  nombre: String,
  apellido: String,
  edad: String,
  description: String

});
var Usuario = mongoose.model('Usuario', Usuario);


var Tarea = new Schema({
  title: String,
  description: String,
  nombre: String,
  fecha: String,
  prioridad: String
});
var Tarea = mongoose.model('Tarea', Tarea);


mongoose.connect('mongodb://localhost/taskmanager', function(err){
  if(!err){
    console.log('Se ha conectado a la base de datos chat');
  } else {
    throw err;
  }
});


/*****************************************************************/

app.delete('/tareas', function (request, response){
  Tarea.findOne({_id: request.query._id }, function (err, tarea){
      
    if(tarea){
      tarea.remove(function (err){});
    } 
 
  });
});

app.put('/tareas', function (request, response){
  console.log("editar, "+request.query._id);
  Tarea.findById(request.query._id, function (err, tarea){
      
    tarea.title = request.query.title;
    tarea.prioridad = request.query.prioridad;
    tarea.nombre = request.query.nombre;
    tarea.fecha = request.query.fecha;
    tarea.description = request.query.description;
    tarea.save(function (err) {});

  });
});

app.get('/usuarios', function(request, response){
  console.log("hola usuarios");
  Usuario.find({}, function (err,usuarios){
    
    response.json(usuarios);
  }); 
});


app.get('/tareas', function(request, response){
  console.log("hola tareas");
  Tarea.find({}, function (err,tareas){
    
    response.json(tareas);
  }); 
});

app.get('/tareas/:id', function(request, response){
  
  Tarea.findById(request.params.id, function (err, tareas){
      
      response.json(tareas);
  
  });
});

app.post('/tareas', function(request, response){
  console.log("Tarea nueva"); 

    var tarea = new Tarea({
        title: request.query.title,
        prioridad: request.query.prioridad,
        fecha: request.query.fecha,
        nombre: request.query.nombre,
        description: request.query.description
      });

      tarea.save(function (err) {});
});   





app.listen(9000);


