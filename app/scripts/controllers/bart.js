'use strict';

angular.module('myvestDashboardApp')
    .controller('BartWidgetController', function ($scope, $http) {
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
      /* var data = {"uri": "http://api.bart.gov/api/etd.aspx?cmd=etd&amp;orig=EMBR", "date": "07/11/2013", "$t": 0, "time": "09:49:08 PM PDT",
        "station": {"name": "Embarcadero", "abbr": "EMBR", "etd": [
          {"destination": "Daly City", "abbreviation": "DALY", "estimate": [
            {"minutes": 18, "platform": 1, "direction": "South", "length": 4, "color": "BLUE", "hexcolor": "&amp;#35;0099cc", "bikeflag": 1},
            {"minutes": 39, "platform": 1, "direction": "South", "length": 4, "color": "BLUE", "hexcolor": "&amp;#35;0099cc", "bikeflag": 1},
            {"minutes": 58, "platform": 1, "direction": "South", "length": 9, "color": "BLUE", "hexcolor": "&amp;#35;0099cc", "bikeflag": 1}
          ]},
          {"destination": "Daly City", "abbreviation": "DALY", "estimate": [
            {"minutes": 18, "platform": 1, "direction": "South", "length": 4, "color": "BLUE", "hexcolor": "&amp;#35;0099cc", "bikeflag": 1},
            {"minutes": 39, "platform": 1, "direction": "South", "length": 4, "color": "BLUE", "hexcolor": "&amp;#35;0099cc", "bikeflag": 1},
            {"minutes": 58, "platform": 1, "direction": "South", "length": 9, "color": "BLUE", "hexcolor": "&amp;#35;0099cc", "bikeflag": 1}
          ]},
          {"destination": "Dublin/Pleasanton", "abbreviation": "DUBL", "estimate": {"minutes": 6, "platform": 2, "direction": "North", "length": {}}}
        ]}}; */

      /* for (var key1 in data.station.etd) {
        var minuteString = "";

        if (data.station.etd[key1].estimate instanceof Array) {
          for (var key2 in data.station.etd[key1].estimate) {
            minuteString = minuteString + data.station.etd[key1].estimate[key2].minutes + ",";
          }
          if (minuteString.length) {
            minuteString = minuteString.substring(0, minuteString.length - 1);
          }
        } else {
          minuteString = data.station.etd[key1].estimate.minutes;
        }

        data.station.etd[key1].minuteString = minuteString;
      }

      $scope.schedule = data; */

      onWidgetCompleted($scope, "bart", function () {
        //Execute this code when widget has finished displaying
      });

      onWidgetCurrent($scope, "bart", function () {

      });

      onWidgetNext($scope, "bart", function () {
        //Execute this code when widget will display next
      });
    });