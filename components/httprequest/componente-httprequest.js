angular.module('angularApp'). //nombreApp
   component('componenteHttprequest', {//nombre componente, para usarlo <componente-httprequest>
    templateUrl: './components/httprequest/template-httprequest.html',
    controller: function HttprequestController($scope,$timeout,$http) {
        $scope.profesores = {};
        $scope.ocultar = false;
        
      //peticion httpRequest mediante ajax, es ASINCRONA!!!
      console.debug('llamada asincrona');
      
      $timeout(function(){
        $http.get('./profesores.json')
        .then(function(data){
            console.trace('response OK %o', data);
            $scope.profesores = data;
            $scope.ocultar = true;
        });
    },2000);
      
      console.debug ('seguimos ejecutando otras sentencias');
      
 

    }
  });