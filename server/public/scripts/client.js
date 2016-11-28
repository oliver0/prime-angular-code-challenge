var app = angular.module('myApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/form', {
    templateUrl: '/views/templates/form.html',
    controller: 'FormController'
  })
  .when('/superheroes', {
    templateUrl: '/views/templates/superheroes.html',
    controller: 'SuperheroController'
  })
  // .otherwise({
  //   redirectTo: 'form'
  // });
}]);

app.controller('FormController', ["$http", function($http) {
console.log('Form controller is running');
// var self = this;
// self.warehouses = [];
//
// getWarehouses();
//
// function getWarehouses() {
//   //$.ajax
//   $http.get('/warehouse')
//     .then(function(response) {
//       self.warehouses = response.data;
//     });
// }
}]);

app.controller('SuperheroController', ["$http", function($http) {
console.log('Superhero controller is running');

}]);
