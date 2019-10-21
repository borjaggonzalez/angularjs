app.controller( 'serviciosController', ['$scope','$http','$log','servicioConstantes','rectanguloService','cuadradoService',
                                    function($scope,$http,$log,servicioConstantes,rectanguloService,cuadradoService){
                                        
 console.trace('serviciosController');
 $log.info('serviciosController con $log');
 $scope.titulo ="Servicios " + servicioConstantes.titulo;
 $scope.constantes = servicioConstantes;


 //usamos el servicio Rectangulo
$scope.alto=5;
$scope.ancho=2;
 rectanguloService.setAncho($scope.alto);
 rectanguloService.setAlto($scope.ancho);
 $scope.area= rectanguloService.getArea();
 $scope.cuadrado= cuadradoService;
$scope.areaCuadrado=cuadradoService.getArea();





}]);