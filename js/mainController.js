/**
 * Controlador Principal
 */
app.controller('mainCtrl', ['$scope','$http','servicioConstantes', function($scope,$http,servicioConstantes){

    this.$onInit= function(){
      console.log("onInit MainController");
      let url='http://localhost:3000/frutas';
   
      
      //Check para comprobar que el servicio rest esta levantado
      $http.get(url).then(function (result) {
        console.trace("servicio rest funcionando %o ",result);
          $scope.alerta={
           "texto": "<strong>OK</strong> Todo funciona correctamente",
            "clase": "success"
          };
      }).catch(function (response) {
        console.warn("servicio rest fallando %o ", response);  
         $scope.alerta={
            "texto": "<strong>ERROR</strong> Servicio Rest Parado",
            "clase": "danger"
           };   
      });
      
    }//onInit
  
  }]);
  