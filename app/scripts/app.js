'use strict';

angular.module('myvestDashboardApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
