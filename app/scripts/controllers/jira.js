'use strict';

angular.module('myvestDashboardApp')
    .controller('JiraWidgetController', function ($scope) {

    /** $scope.issues = [{"key": "AMMO-17507",
                      "summary": "The generic KV DAO does not add all object indices on store()",
                      "assignee": "Leland Garofalo",
                      "reporter": "Leland Garofalo",
                      "priority": "Blocker"},
                     {"key": "AMMO-23456", "summary": "Whatevers"}]; **/

    /* $.ajax({
      url: 'http://jira.myvest.com:8882/rest/api/2/search?jql=project=AMMO+AND+priority=Blocker+AND+status+in+(%22In%20Review%22,Open,%22In%20Progress%22)&maxResults=1',
      dataType: 'jsonp',
      jsonpCallback: jira_response,
      jsonp: 'callback'
    }); */

    $.ajax({
        type: 'GET',
        url: 'http://jira.myvest.com:8882/rest/api/2/search?jql=project=AMMO+AND+priority=Blocker+AND+status+in+(Open)&maxResults=1',
        dataType: 'jsonp',
        jsonpCallback: 'function(data2) {' +
          'var data = $.getJSON(data2);' +
          'console.log(data);' +
//          $scope.issues = [{"key": data.issues[0].key,
//            "summary": data.issues[0].fields.summary,
//            "assignee": data.issues[0].fields.assignee.displayName,
//            "reporter": data.issues[0].fields.reporter.displayName,
//            "priority": data.issues[0].fields.priority.name},
//            {"key": "AMMO-23456", "summary": "Whatevers"}];
        '}',
        jsonp: 'callback'
     });
});