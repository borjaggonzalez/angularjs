angular.module('angularApp'). //nombreApp
   component('componenteEjercicio1a', {//nombre componente, para usarlo <componente-ejercicio1a>
    templateUrl: './components/ejercicio1A/template-ejercicio1A.html',
    controller: function Ejercicio1aController($scope) {
              console.log("Ejericico1aController");

              $scope.total=0; 
              $scope.columna="";
              $scope.flechaN="fa-sort-alpha-down";
              $scope.flechaP="fa-sort-numeric-down";
              $scope.orden=true;
              $scope.frutasJson={"frutas":[
                  {
                      "img":"https://supermercado.eroski.es/images/2388676.jpg",
                      "nombre":"Manzana",
                      "color":"verde",
                      "cantidad":0,
                      "precio":2.96
                  },
                  {   
                      "img":"https://supermercado.eroski.es/images/17210.jpg",
                      "nombre":"Pera",
                      "color":"verde",
                      "cantidad":0,
                      "precio":1.95
                  },
                  {   
                      "img":"https://supermercado.eroski.es/images/12063319.jpg",
                      "nombre":"Kiwi",
                      "color":"marron",
                      "cantidad":0,
                      "precio":1.93
                  }
          
          
              ]};

              //funciones
$scope.aumentarCantidad = function(fj){
    console.log("seleccionado: %o", fj );
    fj.cantidad++;
}

$scope.reducirCantidad = function(fj){
    console.log("seleccionado: %o", fj );
    if(fj.cantidad>0){
        fj.cantidad--;
    }
   
}

$scope.sumarTotal = function(fj){
    console.log("seleccionado: %o", fj );
    $scope.total += fj.cantidad*fj.precio; 
    fj.cantidad=0;
    console.log("total " + $scope.total);
}


$scope.restarTotal = function(){
    console.log("Total a 0");
    $scope.total=0;
    
}

$scope.filtro = function(columna){
    console.log("columna:" + columna);
    $scope.columna=columna;
    $scope.orden = !$scope.orden;

    $scope.flechaN="fa-sort-alpha-down";
    $scope.flechaP="fa-sort-numeric-down";

    if($scope.orden && columna=="nombre"){
        $scope.flechaN="fa-sort-alpha-down";
    }else if(!$scope.orden && columna=="nombre"){
        $scope.flechaN="fa-sort-alpha-up";
    }

    if($scope.orden && columna=="precio"){
        $scope.flechaP="fa-sort-numeric-up";s
    }else if(!$scope.orden && columna=="precio"){
        $scope.flechaP="fa-sort-numeric-down";
    }
}
            

        
    }
  });