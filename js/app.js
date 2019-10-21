var app = angular.module('angularApp',['ngRoute', 'ngSanitize']);
/**
 * Servicio para Constantes
 */

app.constant("servicioConstantes",{
  "titulo":"Angular JS",
  "idioma":"es-ES",
  "version":"1.0",
  "autor":"Borja Garcia",
  "github":"https://github.com/borjaggonzalez/ejerciciosangularjs"
});

/**
 * Providers
 */

 
app.service("cancionProvider",CancionProvider);
app.service("pokemonProvider",PokemonProvider);


 /* Controladores */    
 
 app.controller(
  'profesorController',      // nombre controlador
  function( $scope, $timeout){                // la programacion del controlador


         // propiedades del modelo
         $scope.esVisible=false;
         $scope.animacion = "animated bounceInLeft";
         $scope.editando = {};            
         $scope.profesor = {
             nombre: "Juan Carlos Pineda",
           bio: "Saludos estudiante, mi nombre es Juan Carlos, encantado de conocerte, soy una apasionado instructor de matemáticas aplicadas cuánticas, más orientado a la física termonuclear. Mi vocación es ser maestro y lograr transmitir mis conocimientos a todos mis estudiantes!.",
           edad: 47,
           foto: "img/juancarlos.jpg"
         };


         // funciones
         $scope.editar = function(){
             console.trace('click boton editar');
             angular.copy( $scope.profesor, $scope.editando);
             $scope.animacion = "animated bounceInLeft";
             $scope.esVisible=true;
         }

         $scope.cancelar = function(){
             console.trace('click boton cancelar');
             $scope.animacion = "animated bounceOutRight";
             $timeout(function(){
                 $scope.esVisible=false;
             },500);
             $scope.editando = {};
         }

         $scope.guardar = function(){
             console.trace('click boton guardar');
             angular.copy( $scope.editando, $scope.profesor);
             $scope.animacion = "animated bounceOutRight";
             $timeout(function(){
                 $scope.esVisible=false;
             },500);
         }


});
// end profesorController


app.controller( 'videoController', function($scope,$timeout){  

     // propiedades del modelo
        $scope.animacion = "";
        $scope.video = {
            id: 3,
            nombre: "Red Hot Chili Peppers - Californication [Official Music Video]",
            codigo: "YlUKcNNmywk",
            categoria: {
                 id: 3,
                 nombre: "Musica"
            },
            usuario: {
                 id: 1,
                nombre: "Administrador"
               
            },
            likes: 5
        };

        $scope.sumarLikes = function(){
             $scope.video.likes++;
             $scope.animacion = "animated pulse";
             $timeout(function(){
                 $scope.animacion="";
             },1000);
        }
});
// end videoController

app.controller( 'frutas2Controller', function($scope){ 
 $scope.frutas=["Manzanas","Pera","Kiwi","Platano"];
 $scope.frutasJson={"frutas":[
     {
         "nombre":"Manzana",
         "color":"roja"
     },
     {
         "nombre":"Pera",
         "color":"verde"
     },
     {
         "nombre":"Kiwi",
         "color":"marron"
     }


 ]};


$scope.seleccionado = function(fruta, event){
 console.log("seleccionado:" + fruta);

}


});
// end frutasController



/**
 * Ejemplo Servicio a traves de una clase
 */

function Rectangulo() {
  this.ancho=0;
  this.alto=0;
 
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}
app.service("rectanguloService",Rectangulo);

function Cuadrado(tamanyoInicial) {
  this.ancho=tamanyoInicial.ancho;
  this.alto=tamanyoInicial.alto;
   
  this.setAncho=function(ancho) {
    this.ancho=ancho;
  }
   
  this.setAlto=function(alto) {
    this.alto=alto;
  }  
   
  this.getArea=function() {
    return this.ancho * this.alto;
  }
}

 //Definir Servicio


 app.value("tamanyoInicialCuadrado",{
    ancho:2,
    alto:2
  });

  app.service("cuadradoService",['tamanyoInicialCuadrado',Cuadrado]);



