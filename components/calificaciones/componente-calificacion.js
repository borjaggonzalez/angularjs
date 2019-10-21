angular.module('angularApp'). //nombreApp
   component('componenteCalificacion', {//nombre componente, para usarlo <componente-boton>
    templateUrl: './components/calificaciones/template.html',
    bindings:{
      pnota:'@'
    },
    controller: function CalificacionController() {
      console.trace('CalificacionController');
      const NOTA_MIN=0;
      const NOTA_MAX = 10;
      this.aumentar="+";
      this.disminuir="-";
      this.valoracion="Suspenso";
      this.nota=0;

      //funcion

      //evento para cuando inicia el controlador
      this.$onInit = function(){
        console.trace('CalificacionController init');
        this.nota= +this.pnota; //el  + es el parseInt
        this.observacion();
      }

      this.sumar=function(){
          if(this.nota<10){
          this.nota++;
         
        } 
       this.observacion();
      }


      this.restar=function(){
        console.trace('sumar');
        if(this.nota>NOTA_MIN){
            this.nota--;
           
        }
        this.observacion();
      }

      this.observacion = function(){
        switch (this.nota) {
          case 1:
            this.valoracion="Insuficiente";
            break;
          case 2:
            this.valoracion="Insuficiente";
            break;
          case 3:
            this.valoracion="Insuficiente";
            break;
          case 4:
            this.valoracion="Necesita Mejorar";
            break;
          case 5:
              this.valoracion="Suficiente";
              break;
          case 6:
              this.valoracion="Bien";
              break;
          case 7:
              this.valoracion="Notable Bajo";
              break;
          case 8:
              this.valoracion="Notable Alto";
              break;
          case 9:
              this.valoracion="Sobresaliente";
              break;
          case 10:
              this.valoracion="Sobresaliente";
              break;
          default:
              this.valoracion="Suspenso";
            break;
        }
    }

  }
});