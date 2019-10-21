// var app = angular.module( "app", [ ] );
app.config( function( $routeProvider ){

  $routeProvider
    .when('/',{
        templateUrl: 'parciales/home.html'
    })
    .when('/componente1',{
        templateUrl: 'parciales/componente.html'
    })
    .when('/alumnos',{
      templateUrl: 'parciales/alumnos.html'
  })
    .when('/frutas',{
        template: '<componente-frutas></componente-frutas>'
    })
    .when('/creditos',{
      templateUrl: 'parciales/creditos.html'
    })
    .when('/componente2',{
      template: '<componente-boton></componente-boton>'
    })
    .when('/programacionfuncional',{
      templateUrl: 'parciales/programfuncional.html'
    })
    .when('/promesas',{
      templateUrl: 'parciales/promesas.html'
    })
    .when('/servicios',{
      templateUrl: 'parciales/servicios.html'
    })
    .when('/ejerciciocrud',{
      templateUrl: 'parciales/ejercicio-crud.html'
    })
    .when('/formulario',{
      templateUrl: 'parciales/formulario.html'
    })
    .when('/detalle/:id',{
      templateUrl: 'parciales/detalle.html',
      controller:'detalleController'
    })
    .when('/pokemon',{
      templateUrl: 'parciales/pokemon.html',
      controller:'pokemonController'
    })
    .when('/pokemon/:name',{
      templateUrl: 'parciales/detallePoke.html',
      controller:'detallePokeController'
    })
    .when('/ejercicio1',{
      template: '<componente-ejercicio1></componente-ejercicio1>',
    })
    .when('/ejercicio1a',{
      template: '<componente-ejercicio1a></componente-ejercicio1a>',
    })
    .when('/ejercicio2',{
      template: '<componente-ejercicio2></componente-ejercicio2>',
    })
    .when('/tareas',{
      template: '<componente-tareas></componente-tareas>',
    })
    .when('/httprequest',{
      template: '<componente-httprequest></componente-httprequest>',
    })
    .when('/jsonp',{
      template: '<componente-jsonp></componente-jsonp>',
    })


    
    .otherwise({
      redirectTo: '/'
    })

})
