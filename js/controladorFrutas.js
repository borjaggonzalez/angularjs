app.controller( 'frutasController', function($scope,$http){
    

  $scope.ENDPOINT = "http://localhost:3000/frutas/";
  $scope.frutas= [];

       this.$onInit = function(){
            console.trace('FrutasController onInit');
            $http.get($scope.ENDPOINT)
            .then(function(response){
            console.trace('peticion GET %s response=%o',$scope.ENDPOINT,response);
            $scope.frutas = response.data;
            $scope.visualizar =  $scope.frutas.slice($scope.itemInicial,$scope.itemFinal);
  
            console.trace('paginacion=%o',$scope.visualizar);

            $scope.nombre2e= response.data.filter(e=>e.precio > 2).map(e=>e.nombre);
            $scope.total3e= response.data.filter(e=>e.precio > 3).map(e=>e.precio).reduce((pv,cv)=>pv+cv);;
            $scope.totalEuros=response.data.map(e=>e.precio).reduce((pv,cv)=>pv+cv);
            $scope.precios=response.data.map(e=>e.precio);
            $scope.precios2=response.data.map(e=>e.precio*2);
            $scope.colores= response.data.map(e=>e.color).filter((v,i,a)=>a.indexOf(v)===i);
      
        

        },  function(response){ //gestion de errores
            console.warn ('Tenermos un error %o',response);
            $scope.mensajeValidacion = "ERROR El servidor no responde";    
        });
    };//fin onInit
 
 

});