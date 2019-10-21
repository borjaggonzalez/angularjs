angular.module('angularApp'). //nombreApp
   component('saludoUsuario', {//nombre componente, para usarlo <saludo-usuario>
    template: 'Hola, {{$ctrl.user}}!',
    controller: function SaludoUsuarioController() {
      this.user = 'Mundo';
    }
  });