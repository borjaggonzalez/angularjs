app.controller( 'contratosController', function($scope,$http){
    $scope.ENDPOINT = "http://localhost:3000/contratos";
    $scope.contratos=[];
    $scope.ejercicio1=[];
    $scope.ejercicio2=[];
    $scope.ejercicio3 = [];
    $scope.ejercicio4 = [];
    $scope.tiposproductos=[];

         this.$onInit = function(){
              console.trace('contratosController onInit');
              $http.get($scope.ENDPOINT).then(function(response){
                      console.trace('peticion GET %s response=%o',$scope.ENDPOINT,response);
                    $scope.contratos = response.data;
                    $scope.ejercicios();
                   
              });
            
        };//onInit


    $scope.ejercicios = function(){
        console.trace('ejercio 1');
        $scope.ejercicio1 =  $scope.contratos.filter(e=>e.TIPPRODUCT==='KT'); 
      
        $scope.tiposproductos=  $scope.contratos.map(e=>e.TIPPRODUCT).filter((v,i,a)=>{
            return a.indexOf(v)===i;
        }); 

        console.trace('ejercio 2');
        $scope.ejercicio2 =  $scope.contratos.map(e=>{
            
            let cc= ((e.codContrat)?e.codContract:0)+"-"+((e.digContrat)?e.digContrat:0);
            
            
            return{
             "codigoContrato" :cc,
             "salario":((e.SALCONTRAT)?(e.SALCONTRAT/100):0)  
                }
        }).filter(
            e=>{
                return (e.codigoContrato != "" && e.salario >0);
            }
        );
                                                    
        console.trace('ejercio 3');                                              
        $scope.ejercicio3 = $scope.contratos.filter(v=>{
            if(v.ACCIONES != undefined){
                let result = v.ACCIONES.filter(e=> e.clave=="SITUACION");
                if(result.length === 1){
                    return true;
                }else{
                    return false;
                }
                
            }else{
                return false;
            }
        }); 

  

        console.trace('ejercio 4');
        $scope.temporal = $scope.contratos.filter(e=> e.ACCIONES != null && e.ACCIONES != "");
                                                   
        $scope.ejercicio4 = $scope.temporal.map(e=>e.ACCIONES).filter((v,i,a)=>{

    


             return a.indexOf(v)===i;
                
        });
     

        console.trace('ejercio 5');
    }

    
});