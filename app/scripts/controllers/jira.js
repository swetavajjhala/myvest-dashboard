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

    var jira_response = {
                        "expand": "names,schema",
                        "startAt": 0,
                        "maxResults": 1,
                        "total": 18,
                        "issues": [
                        {
                        "expand": "editmeta,renderedFields,transitions,changelog,operations",
                        "id": "38307",
                        "self": "http://jira.myvest.com:8882/rest/api/2/issue/38307",
                        "key": "AMMO-17507",
                        "fields": {
                        "progress": {
                        "progress": 0,
                        "total": 0
                        },
                        "summary": "The generic KV DAO does not add all object indices on store()",
                        "customfield_10081": null,
                        "issuetype": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/issuetype/1",
                        "id": "1",
                        "description": "A problem which impairs or prevents the functions of the product.",
                        "iconUrl": "http://jira.myvest.com:8882/images/icons/issuetypes/bug.png",
                        "name": "Bug",
                        "subtask": false
                        },
                        "customfield_10080": null,
                        "customfield_10302": null,
                        "votes": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-17507/votes",
                        "votes": 0,
                        "hasVoted": false
                        },
                        "resolution": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/resolution/1",
                        "id": "1",
                        "description": "A fix for this issue is checked into the tree and tested.",
                        "name": "Fixed"
                        },
                        "fixVersions": [
                        {
                        "self": "http://jira.myvest.com:8882/rest/api/2/version/12210",
                        "id": "12210",
                        "name": "13.0",
                        "archived": false,
                        "released": false,
                        "releaseDate": "2013-02-01"
                        }
                        ],
                        "resolutiondate": "2013-04-17T16:28:30.000-0700",
                        "timespent": null,
                        "reporter": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/user?username=lgarofalo",
                        "name": "lgarofalo",
                        "emailAddress": "lgarofalo@myvest.com",
                        "avatarUrls": {
                        "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                        "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                        },
                        "displayName": "Leland Garofalo",
                        "active": true
                        },
                        "aggregatetimeoriginalestimate": null,
                        "updated": "2013-05-31T10:57:01.000-0700",
                        "created": "2013-04-17T14:43:34.000-0700",
                        "description": "index() is incorrectly called twice as a part of store() in the GenericDAOImpl (once in the store and again in the new cache(Object,Object).\r\n\r\nCorrect behavior would be having index called only once on store.\r\n\r\nSee changes in the AMMO-16318 commit to see the changes that caused the issue.\r\n\r\nCurrently this is causing the FixmlWorkUnitDAO to not store the sequence index because on the second time index() is called it doesn't add the sequence index again (Which is the appropriate behavior).",
                        "priority": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/priority/1",
                        "iconUrl": "http://jira.myvest.com:8882/images/icons/priorities/blocker.png",
                        "name": "Blocker",
                        "id": "1"
                        },
                        "duedate": null,
                        "customfield_10040": null,
                        "issuelinks": [],
                        "customfield_10060": null,
                        "watches": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-17507/watchers",
                        "watchCount": 1,
                        "isWatching": false
                        },
                        "customfield_10062": null,
                        "customfield_10061": null,
                        "subtasks": [],
                        "status": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/status/10002",
                        "description": "The issue has been completed by the developer and is now awaiting code review and verification",
                        "iconUrl": "http://jira.myvest.com:8882/images/icons/statuses/visible.png",
                        "name": "In Review",
                        "id": "10002"
                        },
                        "customfield_10090": null,
                        "labels": [
                        "13.0closeout-sprint10"
                        ],
                        "customfield_10091": null,
                        "workratio": -1,
                        "assignee": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/user?username=lgarofalo",
                        "name": "lgarofalo",
                        "emailAddress": "lgarofalo@myvest.com",
                        "avatarUrls": {
                        "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                        "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                        },
                        "displayName": "Leland Garofalo",
                        "active": true
                        },
                        "customfield_10500": null,
                        "aggregatetimeestimate": null,
                        "project": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/project/AMMO",
                        "id": "10000",
                        "key": "AMMO",
                        "name": "Ammo",
                        "avatarUrls": {
                        "16x16": "http://jira.myvest.com:8882/secure/projectavatar?size=small&pid=10000&avatarId=10023",
                        "48x48": "http://jira.myvest.com:8882/secure/projectavatar?pid=10000&avatarId=10023"
                        }
                        },
                        "versions": [
                        {
                        "self": "http://jira.myvest.com:8882/rest/api/2/version/12210",
                        "id": "12210",
                        "name": "13.0",
                        "archived": false,
                        "released": false,
                        "releaseDate": "2013-02-01"
                        }
                        ],
                        "environment": null,
                        "timeestimate": null,
                        "aggregateprogress": {
                        "progress": 0,
                        "total": 0
                        },
                        "lastViewed": null,
                        "customfield_10050": {
                        "self": "http://jira.myvest.com:8882/rest/api/2/user?username=vlad.brichkov",
                        "name": "vlad.brichkov",
                        "emailAddress": "vbrichkov@myvest.com",
                        "avatarUrls": {
                        "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                        "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                        },
                        "displayName": "Vlad Brichkov",
                        "active": true
                        },
                        "customfield_10030": null,
                        "components": [
                        {
                        "self": "http://jira.myvest.com:8882/rest/api/2/component/10955",
                        "id": "10955",
                        "name": "FIXML",
                        "description": "TIAA Trust"
                        }
                        ],
                        "timeoriginalestimate": null,
                        "customfield_10071": null,
                        "aggregatetimespent": null
                        }
                        }
                        ]
                        };
    $scope.issues = [{"key": jira_response.issues[0].key,
                       "summary": jira_response.issues[0].fields.summary,
                       "assignee": jira_response.issues[0].fields.assignee.displayName,
                       "reporter": jira_response.issues[0].fields.reporter.displayName,
                       "priority": jira_response.issues[0].fields.priority.name},
                       {"key": "AMMO-23456", "summary": "Whatevers"}];
});