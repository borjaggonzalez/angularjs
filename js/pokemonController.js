app.controller( 'pokemonController',['$scope','pokemonProvider', function($scope,pokemonProvider){
   

    console.trace('PokemonController');
    $scope.titulo = "Pokemon";
    $scope.pokemons = [];

    console.trace("pedimos a la API todos los pokemos");     
    $scope.pokemons = {};
    pokemonProvider.listar().then( data => $scope.pokemons = data );



}]);