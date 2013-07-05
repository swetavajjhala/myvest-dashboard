'use strict';

angular.module('myvestDashboardApp')
    .controller('CountdownWidgetController', function ($scope) {
      $scope.eventDate = new Date();

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

        $scope.months=eventDate.diff(today, "months");
        eventDate.subtract($scope.months, "months");
        $scope.weeks=eventDate.diff(today, "weeks");
        eventDate.subtract($scope.weeks, "weeks");
        $scope.days=eventDate.diff(today, "days");
        eventDate.subtract($scope.days, "days");
        $scope.hours=eventDate.diff(today, "hours");
      };
});