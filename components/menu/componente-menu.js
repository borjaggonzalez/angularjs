angular.module('angularApp'). //nombreApp
   component('componenteMenu', {//nombre componente, para usarlo <componente-menu>
    templateUrl: './components/menu/menu.html',
    controller: function MenuController($scope) {
      console.trace('MenuController');
          
      $scope.rutas=[
        { 
          "nombre":"",
          "url":"#!/",
          "active":true, 
          "icono":"fas fa-home"
       },
       { 
          "nombre":"Frutas",
          "url":"#!/frutas",
          "active":false,
          "icono": "fas fa-apple-alt"
        },
        { 
          "nombre":"Alumnos",
          "url":"#!/alumnos",
          "active":false,
          "icono":"fas fa-user-graduate"
        },
        { 
          "nombre":"Creditos",
         "url":"#!/creditos",
          "active":false,
          "icono":"fas fa-ticket-alt"
        },
        { 
          "nombre":"Componentes",
         "url":"#!/componente1",
          "active":false,
          "icono":"fas fa-cogs"
        }, 
        { 
          "nombre":"Filter,Map,Reduce",
         "url":"#!/programacionfuncional",
          "active":false,
          "icono":"fas fa-terminal"
        },
        { 
          "nombre":"Promesas",
         "url":"#!/promesas",
          "active":false,
          "icono":"fas fa-pray"
        },
        { 
          "nombre":"Servicios",
         "url":"#!/servicios",
          "active":false,
          "icono":"fas fa-concierge-bell"
        },
        { 
          "nombre":"Ejercicio CRUD",
         "url":"#!/ejerciciocrud",
          "active":false,
          "icono":"fas fa-cross"
        },{ 
          "nombre":"Formulario",
         "url":"#!/formulario",
          "active":false,
          "icono":"fab fa-wpforms"
        },
        { 
          "nombre":"Pokemon",
         "url":"#!/pokemon",
          "active":false,
          "icono":"fas fa-headset"
        }
       
       
      ];

     
  
           //funcion
      $scope.cambiarActivo = function(ruta){
        $scope.rutas.forEach(element => {
          element.active=false;
        });
        ruta.active=true;
  
      }
  
 
    }//Fin MenuController
  });