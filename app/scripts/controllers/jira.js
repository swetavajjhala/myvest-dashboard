'use strict';

angular.module('myvestDashboardApp')
    .controller('JiraWidgetController', function ($scope) {

    $scope.items = [{"key": "AMMO-12345"}, {"key": "AMMO-23456"}];
});