'use strict';

angular.module('myvestDashboardApp')
    .controller('CountdownWidgetController', function ($scope) {
      if(!$scope.eventDate) {
        $scope.eventDate = new Date("July 26, 2013 12:00:00");
      }
      if(!$scope.eventName) {
        $scope.eventName = "13.0";
      }

      onWidgetCompleted($scope, "countdown", function() {
        //Execute this code when widget has finished displaying
      });

      onWidgetCurrent($scope, "countdown", function() {
        //Execute this code when widget is displaying currently
        recalculateCountdown();
      });

      $scope.$watch('eventDate', function(newEventDate) {
        recalculateCountdown();
      });

      onWidgetNext($scope, "countdown", function() {
        //Execute this code when widget will display next
      });

      var recalculateCountdown = function() {
        //Months are zero-indexed in moment
        var eventDate = moment($scope.eventDate);
        var today = moment(); // similar to new Date();

//        $scope.months=eventDate.diff(today, "months");
//        eventDate.subtract($scope.months, "months");
//        $scope.weeks=eventDate.diff(today, "weeks");
//        eventDate.subtract($scope.weeks, "weeks");
        $scope.days=eventDate.diff(today, "days");
        eventDate.subtract($scope.days, "days");
        $scope.hours=eventDate.diff(today, "hours");
        eventDate.subtract($scope.hours, "hours");

        $scope.minutes=eventDate.diff(today, "minutes");
        eventDate.subtract($scope.minutes, "minutes");

        $scope.seconds=eventDate.diff(today, "seconds");
        eventDate.subtract($scope.seconds, "seconds");
      };

      $scope.countDown = 60;
      var timer = setInterval(function(){
        $scope.countDown--;
        recalculateCountdown();
        $scope.$apply();
        console.log($scope.countDown);
      }, 1000);
    });