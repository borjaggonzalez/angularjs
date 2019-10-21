angular.module('angularApp'). //nombreApp
   component('componenteFrutas', {
    templateUrl: './components/frutas/template-frutas.html',
    controller: function FrutasController($http,$scope,$window) {
        $scope.total=0; 
        $scope.titulo="Frutas"
        $scope.frutas = [];
        $scope.visualizar = [];
        $scope.itemInicial = 0;
        $scope.elementosPag=3;
        $scope.itemFinal=$scope.elementosPag;
        $scope.nPaginas;
        
        $scope.ENDPOINT = "http://localhost:3000/frutas/";

        //eventos
        this.$onInit = function(){
            console.trace('ListadoController onInit');
            $http.get($scope.ENDPOINT)
                .then(function(response){
                console.trace('peticion GET %s response=%o',$scope.ENDPOINT,response);
                $scope.frutas = response.data;
                $scope.visualizar =  $scope.frutas.slice($scope.itemInicial,$scope.itemFinal);
                $scope.nPaginas = $window.Math.ceil($scope.frutas.length/$scope.elementosPag);
                console.trace('paginacion=%o',$scope.visualizar);
    
                $scope.nombre2e= response.data.filter(e=>e.precio > 2).map(e=>e.nombre);
                $scope.total3e= response.data.filter(e=>e.precio > 3).map(e=>e.precio).reduce((pv,cv)=>pv+cv);;
                $scope.totalEuros=response.data.map(e=>e.precio).reduce((pv,cv)=>pv+cv);
                $scope.colores= response.data.map(e=>e.color).filter((v,i,a)=>
                {
                    return a.indexOf(v)===i;
                } );  
                
                

            }, function(response){ //gestion de errores
                    console.warn ('Tenermos un error %o',response);
                    $scope.mensajeValidacion = "ERROR El servidor no responde";    
            });
        };//fin onInit



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

    $scope.paginacionSig = function(){
        $scope.itemInicial += $scope.elementosPag;
        $scope.itemFinal +=$scope.elementosPag; 
        $scope.visualizar =  $scope.frutas.slice($scope.itemInicial,$scope.itemFinal);
    }
    $scope.paginacionAnt = function(){
        $scope.itemInicial -= $scope.elementosPag;
        $scope.itemFinal -= $scope.elementosPag; 
        $scope.visualizar =  $scope.frutas.slice($scope.itemInicial,$scope.itemFinal);
    }

    
    $scope.iraPagina= function(inicial,final){
        $scope.itemInicial = inicial;
        $scope.itemFinal = final; 
        $scope.visualizar =  $scope.frutas.slice($scope.itemInicial,$scope.itemFinal);
        
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
            scope.flechaP="fa-sort-numeric-down";
        }
    }


 }
});