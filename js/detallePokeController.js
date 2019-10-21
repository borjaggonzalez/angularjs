app.controller( 'detallePokeController',['$scope','$routeParams','$http' ,function($scope,$routeParams,$http){
   

    console.trace('DetallePokeController');
    $scope.name = $routeParams.name;
    $scope.ENDPOINT = "https://pokeapi.co/api/v2/pokemon/";
    $scope.url=$scope.ENDPOINT+$scope.name;
    $scope.pokemon = [];


    $http.get($scope.url)
             .then(function(response){
                 console.trace('peticion GET %s response=%o',$scope.url,response);
                 $scope.pokemon = response.data;
                 
                  console.trace('paginacion=%o',$scope.pokemon);
     
             },  function(response){ //gestion de errores
                 console.warn ('Tenermos un error %o',response);
            
             });


}]);