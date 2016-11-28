var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/form', {
    templateUrl: '/views/templates/form.html',
    controller: 'FormController',
    controllerAs: 'fc'
  })
  .when('/superheroes', {
    templateUrl: '/views/templates/superheroes.html',
    controller: 'SuperheroController',
    controllerAs: 'sc'
  })
  // .otherwise({
  //   redirectTo: 'form'
  // });
}]);

app.controller('FormController', ["$http", function($http) {
console.log('Form controller is running');
  var self = this;
  self.superHeroes = [];
  self.newSuperhero = {};
  self.superPowers = [];

  getHeroes();

  function getHeroes() {
    $http.get('/heroes')
      .then(function(response) {
        console.log("Heroes! : ", response.data);
        self.superHeroes = response.data;
      });
  }

  function getSuperPowers() {
    $http.get('/superpowers')
      .then(function(response) {
        console.log("Powers! : ", response.data);
        self.superPowers = response.data;
      });
  }

  self.addSuperhero = function() {
    for (var i = 0; i < self.superPowers.length; i++) {
      if(self.superPowers[i].name == self.newSuperhero.name){
        var power_id = self.superPowers[i].power_id;
      }
    }
    self.newSuperhero.power_id = power_id;
    console.log('new Superhero: ', self.newSuperhero);
    $http.post('/heroes', self.newSuperhero)
      .then(function(response) {
        console.log('POST finished. Get heroes again.');
        getHeroes();
      });
  }



}]);

app.controller('SuperheroController', ["$http", function($http) {
console.log('Superhero controller is running');
  var self = this;
  self.superHeroes = [];


  getHeroes();

  function getHeroes() {
    $http.get('/heroes')
      .then(function(response) {
        console.log("Heroes! : ", response.data);
        self.superHeroes = response.data;
      });
  }

  self.deleteSuperhero = function(superhero){
    console.log('clicked');
    $http.delete('/heroes/'+ superhero.id)
      .then(function(response){
        console.log('DELETE finished. Get heroes again.');
        getHeroes();
      });
    }
}]);
