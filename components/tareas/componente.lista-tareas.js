angular.
module('angularApp').
component('componenteTareas',{
    templateUrl:'./components/tareas/template.lista-tareas.html',
    controller: function ListadoController($http,$scope){
         console.trace("ListadoController");
        //propiedas o variables
        $scope.titulo="Listado Tareas"
        $scope.nuevaTarea="";
        $scope.mensajeValidacion="";
        $scope.tareas = [];
        $scope.ENDPOINT = "http://localhost:3000/tareas/";

        //eventos
        this.$onInit = function(){
            console.trace('ListadoController onInit');
            $http.get($scope.ENDPOINT)
                .then(function(response){
                console.trace('peticion GET %s response=%o',$scope.ENDPOINT,response);
                $scope.tareas = response.data;
            }, function(response){ //gestion de errores
                    console.warn ('Tenermos un error %o',response);
                    $scope.mensajeValidacion = "ERROR El servidor no responde";    
            });
        };//fin onInit



        //funciones
            $scope.crearTarea = function(){
                    console.trace('click boton crearTarea con descripcion ' + $scope.nuevaTarea );
                    let descripcion = $scope.nuevaTarea.trim();
                    if(descripcion.length <= 2){
                        $scope.mensajeValidacion = "Por favor escribe una descripcion mas larga";                    
                    }else{
                        console.trace("llamada post");
                        $scope.mensajeValidacion='';

                        let data={
                            "completada":false,
                            "descripcion":$scope.nuevaTarea
                        };

                        $http.post($scope.ENDPOINT,data).then(function(response){
                            console.trace('peticion OK %s response=%o',$scope.ENDPOINT,response);
                        },function(response){ //gestion de errores
                            console.warn ('Tenermos un ERRROR response: %o',response);
                        });


                    }
            };//fin crearTarea
            
     
            $scope.eliminarTarea = function( tarea ) {
                console.trace('click eliminarTarea %o', tarea);
                let url = $scope.ENDPOINT + tarea.id;
                $http.delete( url ).then(function(response){   
                    console.trace('reponse OK data=%o', response);               
                }, function(response){    
                    console.warn('Tenemos un ERROR response: %o' , response)
                });
            };// eliminarTarea

             $scope.completarTarea = function( tarea ) {
            console.trace('click completarTarea %o', tarea);
            let url = $scope.ENDPOINT + tarea.id;
            
            let data ={
                "id":tarea.id,
                "completada":!tarea.completada,
                "descripcion":tarea.descripcion
            };
            
                $http.put(url,data).then(function(response){

                    console.trace('reponse OK data=%o', response);  
                 },function(response){ 

                    console.warn('Tenemos un ERROR response: %o' , response)
            
                });

            };// completarTarea



              

   
            $scope.editarTarea = function( tarea ) {
                console.trace('click completarTarea %o', tarea);
                let url = $scope.ENDPOINT + tarea.id;
                $scope.descripcionEditar = tarea.descripcion;
                $http.patch(url,tarea).then(function(response){
    
                        console.trace('reponse OK data=%o', response);  
                     },function(response){ 
    
                        console.warn('Tenemos un ERROR response: %o' , response);
                
                    });
    
                };// completarTarea
   

    }
});