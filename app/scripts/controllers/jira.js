'use strict';

angular.module('myvestDashboardApp')
    .controller('JiraWidgetController', function ($scope) {

    $scope.issues = [{"key": "AMMO-17507",
                      "summary": "The generic KV DAO does not add all object indices on store()",
                      "assignee": "Leland Garofalo",
                      "reporter": "Leland Garofalo",
                      "priority": "Blocker"},
                     {"key": "AMMO-23456", "summary": "Whatevers"}];



                                /** <td>{{issue.key}}</td>
                                 <td>{{issue.summary}}</td>
                                 <td>{{issue.assignee}}</td>
                                 <td>{{issue.reporter}}</td>
                                 <td>{{issue.priority}}</td> **/
});