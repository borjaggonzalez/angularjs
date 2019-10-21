app.controller( 'fromController', ['$scope',
                                    function($scope){

      $scope.titulo ="Formulario";                 
      $scope.fromData={};

      $scope.guardarDatos = function(valido){
            if(valido){
                  console.log('Guardando...');
            }
         
      }
                                    
}]);