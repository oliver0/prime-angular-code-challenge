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

  getHeroes();

  function getHeroes() {
    $http.get('/heroes')
      .then(function(response) {
        console.log("Heroes! : ", response.data);
        self.superHeroes = response.data;
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
}]);
