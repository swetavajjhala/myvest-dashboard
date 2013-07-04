'use strict';

angular.module('myvestDashboardApp')
    .controller('CountdownWidgetController',function ($scope) {

      //Months are zero-indexed
      var eventDate = moment([2013, 6, 12]);
      var today = moment(); // similar to new Date();

      $scope.months=eventDate.diff(today, "months");
      eventDate.subtract($scope.months, "months");
      $scope.weeks=eventDate.diff(today, "weeks");
      eventDate.subtract($scope.weeks, "weeks");
      $scope.days=eventDate.diff(today, "days");
      eventDate.subtract($scope.days, "days");
      $scope.hours=eventDate.diff(today, "hours");
      $scope.eventName="Hackathon";
});