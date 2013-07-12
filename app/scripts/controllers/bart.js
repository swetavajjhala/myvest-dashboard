'use strict';

angular.module('myvestDashboardApp')
    .controller('BartWidgetController', function ($scope, $http) {

      var refreshBartData = function() {
        $http({ method: 'GET', url: '/bart' }).
            success(function (data, status, headers, config) {
              for (var key1 in data.root.station[0].etd) {
                var minuteString = "";

                if (data.root.station[0].etd[key1].estimate instanceof Array) {
                  for (var key2 in data.root.station[0].etd[key1].estimate) {
                    minuteString = minuteString + data.root.station[0].etd[key1].estimate[key2].minutes + ",";
                  }
                  if (minuteString.length) {
                    minuteString = minuteString.substring(0, minuteString.length - 1);
                  }
                } else {
                  minuteString = data.root.station[0].etd[key1].estimate.minutes;
                }

                data.root.station[0].etd[key1].minuteString = minuteString;
              }
              $scope.schedule = data;
            }).
            error(function (data, status, headers, config) {
              // ...
            });
      };

      onWidgetCompleted($scope, "bart", function () {
      });

      onWidgetCurrent($scope, "bart", function () {
        if (!$scope.schedule) {
          refreshBartData();
        }
      });

      onWidgetNext($scope, "bart", function () {
        refreshBartData();
      });
    });