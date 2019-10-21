angular.module('angularApp'). //nombreApp
   component('componenteFooter', {//nombre componente, para usarlo <componente-footer>
    templateUrl: './components/footer/template-footer.html',
    controller: function FooterController($scope,servicioConstantes) {
      console.trace('FooterController');
        $scope.constantes = servicioConstantes;
      
      /*
      $scope.autor = servicioConstantes.autor;
      $scope.version = servicioConstantes.version;
      $scope.github = servicioConstantes.github;
      */ 
 
    }//Fin MenuController
  });