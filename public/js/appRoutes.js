angular.module('appRoutes', [])
.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider

  .when('/', {
    templateUrl: 'views/home.html', 
    controller: 'MainController'
  })

  .when('/entries', {
    templateUrl: 'views/entry.html', 
    controller: 'EntryController'
  })

  $locationProvider.html5Mode(true);
}])