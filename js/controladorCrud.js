app.controller( 'crudController', function($scope,cancionProvider){
    $scope.titulo = "MusicOnLoad";


    //variables del scope del controlador
    $scope.ENDPOINT = "http://localhost:8080/cancion/";
    $scope.canciones= [];
    $scope.cancion=[];
    $scope.cancionEditar= [];7
    //Eventos
    this.$onInit= function(){
    console.trace ('crudController onInit');
   

      
    $scope.refrescar();
    
    //llamada Ajax al servicio Rest, TODO encapsular en un Provider
    

    };


   // funciones
    ///////////////////////////////////////////////////////////////////////////

        /*
        TODO ponerlo donde sea neceario
        cancionProvider.listar();
        cancionProvider.detalle(1);
        cancionProvider.eliminar(2);
        cancionProvider.crear("Mockito");
        cancionProvider.modificar(1,"Cambiada Cancion 1");
        */

       $scope.refrescar = () =>{
             
        let promesa1 = cancionProvider.listar();
        promesa1.then(response=>{
        console.debug ('llamada listar OK %o', response);
        $scope.canciones = response.data;
        }, 
      response =>{
        console.warn('llamada listar ERROR %o',response);
    });

    }//refrescar


    $scope.nuevaCancion = ( nombre ) => {

        console.trace('click nuevaCancion nombre %s', nombre);
        //TODO validacion

        let p = cancionProvider.crear( nombre);
       if(nombre  == undefined || nombre == ""){
        $scope.mensaje={
            "texto": "<strong>ERROR</strong> No has introducido texto",
            "clase": "danger"
           };
       }else{
        p.then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.mensaje={
                    "texto": "<strong>OK</strong> Registro Creado",
                    "clase": "success"
                   };
                  
                $scope.refrescar();
            
            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
                $scope.mensaje={
                    "texto": "<strong>WARNING</strong> Registro Duplicado o Formato no valido",
                    "clase": "warning   "
                   };
             }
         );
        }
         

    };
    //nuevaCancion



    $scope.borrarCancion = ( id ) => {

        console.trace('click borrarCancion nombre %s', id);
        //TODO validacion

        
        if(confirm('¿Estas Seguro?')){
         let p2 = cancionProvider.eliminar(id);
        p2.then(
            (response)=>{
                console.debug('llamada correcta %o', response);
                $scope.mensaje={
                    "texto": "<strong>OK</strong> Registro Eliminado",
                    "clase": "success"
                   };
                  
                $scope.refrescar();
            
            },
            (response)=>{
                console.warn('llamada INcorrecta %o', response);
                $scope.mensaje={
                    "texto": "<strong>WARNING</strong> No se ha podido eliminar",
                    "clase": "warning   "
                   };
             }
         );ç
        }//cierre confirm
         
    };
    //borrarCancion



    $scope.modificarCancion = ( cancion ) => {

        console.trace('click nuevaCancion nombre %s ',cancion.id, ' %s ', cancion.nombre);
        //TODO validacion
        $scope.cancionEditar=cancion;
     

    };


    $scope.editarCancion = (cancionEditar)=>{
        console.trace('click nuevaCancion nombre %o ' + cancionEditar);
    }


});