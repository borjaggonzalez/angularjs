angular.module('angularApp'). //nombreApp
   component('componenteBoton', {//nombre componente, para usarlo <componente-boton>
    templateUrl: './components/boton/template.html',
    controller: function BotonController() {
      console.trace('BotonController');
      this.titulo="Pulsa el boton";
      this.contador=0;

      //funcion
      this.sumar=function(){
          console.trace('sumar');
          this.contador++;

      }

      this.restar=function(){
        console.trace('sumar');
        if(this.contador>0){
            this.contador--;
        }
       

    }

    }
  });