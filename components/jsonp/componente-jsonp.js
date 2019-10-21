angular.module('angularApp'). //nombreApp
   component('componenteJsonp', {//nombre componente, para usarlo <componente-httprequest>
    templateUrl: './components/jsonp/template-jsonp.html',
    controller: function HttprequestController($scope,$http,$sce) {


$scope.localizacion = {};
$scope.ocultar=true;
var url = 'http://geoplugin.net/json.gp';
 var trustedUrl= $sce.trustAsResourceUrl(url);

//peticion httpRequest mediante ajax, es ASINCRONA!!!
    $scope.localizar = function(){
      $http.get(trustedUrl)
      .then(function(response){
          console.trace('response OK %o', response);
          $scope.localizacion = response.data;
          $scope.ocultar=false;
          $scope.initMap();
      });
    };//localizar

    $scope.initMap = function() {
      var myLatLng = {
                   lat: +$scope.localizacion.geoplugin_latitude, 
                   lng: +$scope.localizacion.geoplugin_longitude
                  };

     var map = new google.maps.Map(document.getElementById('map'), {
       zoom: 12,
        center: myLatLng
     });

     var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: $scope.localizacion.geoplugin_regionName
        });   
    };//initMap

    
}
 

});
