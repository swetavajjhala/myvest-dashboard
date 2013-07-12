'use strict';

angular.module('myvestDashboardApp')
    .controller('JiraWidgetController', function ($scope) {

      var jira_response = {
        "expand": "names,schema",
        "startAt": 0,
        "maxResults": 5,
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
          },
          {
            "expand": "editmeta,renderedFields,transitions,changelog,operations",
            "id": "36824",
            "self": "http://jira.myvest.com:8882/rest/api/2/issue/36824",
            "key": "AMMO-16645",
            "fields": {
              "progress": {
                "progress": 0,
                "total": 0
              },
              "summary": "Fix OrderDetailResourceImplIntegrationTest",
              "customfield_10081": null,
              "issuetype": {
                "self": "http://jira.myvest.com:8882/rest/api/2/issuetype/9",
                "id": "9",
                "description": "A technical task.",
                "iconUrl": "http://jira.myvest.com:8882/images/icons/issuetypes/task_agile.png",
                "name": "Technical task",
                "subtask": true
              },
              "customfield_10080": null,
              "customfield_10302": null,
              "votes": {
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-16645/votes",
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
                  "self": "http://jira.myvest.com:8882/rest/api/2/version/12611",
                  "id": "12611",
                  "name": "13.0 - Internal",
                  "archived": false,
                  "released": false
                }
              ],
              "resolutiondate": "2013-02-28T13:40:59.000-0800",
              "timespent": null,
              "reporter": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=jwang",
                "name": "jwang",
                "emailAddress": "jwang@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Jin Yi Wang",
                "active": true
              },
              "aggregatetimeoriginalestimate": null,
              "updated": "2013-02-28T13:40:59.000-0800",
              "created": "2013-02-07T08:38:36.000-0800",
              "description": "The test failed at the latest run on jenkins, broken possibly by the commit: I3694a7839a5e577ecd79a16dfdfa77b90d116180.\r\nhttp://jenkins.myvest.com:8080/job/Git%20Master%20Full%20Test/lastCompletedBuild/testReport/com.myvest.sps.web.services.resources.common.portfolio.analysis/PortfolioAnalysisResourceImplIntegrationTest/testDriftAssetClassificationWithNoOrder/",
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
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-16645/watchers",
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
              "labels": [],
              "customfield_10091": null,
              "parent": {
                "id": "36649",
                "key": "AMMO-16533",
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/36649",
                "fields": {
                  "summary": "Fix integration tests from 01/29/2013",
                  "status": {
                    "self": "http://jira.myvest.com:8882/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "http://jira.myvest.com:8882/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5"
                  },
                  "priority": {
                    "self": "http://jira.myvest.com:8882/rest/api/2/priority/2",
                    "iconUrl": "http://jira.myvest.com:8882/images/icons/priorities/critical.png",
                    "name": "Critical",
                    "id": "2"
                  },
                  "issuetype": {
                    "self": "http://jira.myvest.com:8882/rest/api/2/issuetype/8",
                    "id": "8",
                    "description": "An user story",
                    "iconUrl": "http://jira.myvest.com:8882/images/icons/issuetypes/story.png",
                    "name": "Story",
                    "subtask": false
                  }
                }
              },
              "workratio": -1,
              "assignee": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=nle",
                "name": "nle",
                "emailAddress": "nle@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Nguyen Le",
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
              "versions": [],
              "environment": null,
              "timeestimate": null,
              "aggregateprogress": {
                "progress": 0,
                "total": 0
              },
              "lastViewed": null,
              "customfield_10050": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=bmadsen",
                "name": "bmadsen",
                "emailAddress": "bmadsen@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&ownerId=bmadsen&avatarId=10070",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?ownerId=bmadsen&avatarId=10070"
                },
                "displayName": "Ben Madsen",
                "active": true
              },
              "customfield_10030": null,
              "components": [],
              "timeoriginalestimate": null,
              "customfield_10071": null,
              "aggregatetimespent": null
            }
          },
          {
            "expand": "editmeta,renderedFields,transitions,changelog,operations",
            "id": "36823",
            "self": "http://jira.myvest.com:8882/rest/api/2/issue/36823",
            "key": "AMMO-16644",
            "fields": {
              "progress": {
                "progress": 0,
                "total": 0
              },
              "summary": "Fix PortfolioAnalysisResourceImplIntegrationTest",
              "customfield_10081": null,
              "issuetype": {
                "self": "http://jira.myvest.com:8882/rest/api/2/issuetype/9",
                "id": "9",
                "description": "A technical task.",
                "iconUrl": "http://jira.myvest.com:8882/images/icons/issuetypes/task_agile.png",
                "name": "Technical task",
                "subtask": true
              },
              "customfield_10080": null,
              "customfield_10302": null,
              "votes": {
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-16644/votes",
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
                  "self": "http://jira.myvest.com:8882/rest/api/2/version/12611",
                  "id": "12611",
                  "name": "13.0 - Internal",
                  "archived": false,
                  "released": false
                }
              ],
              "resolutiondate": "2013-02-27T17:46:20.000-0800",
              "timespent": null,
              "reporter": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=jwang",
                "name": "jwang",
                "emailAddress": "jwang@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Jin Yi Wang",
                "active": true
              },
              "aggregatetimeoriginalestimate": null,
              "updated": "2013-02-27T17:46:20.000-0800",
              "created": "2013-02-07T08:36:59.000-0800",
              "description": "The test failed at the latest run on jenkins, broken possibly by the commit:  I3694a7839a5e577ecd79a16dfdfa77b90d116180.\r\n\r\nhttp://jenkins.myvest.com:8080/job/Git%20Master%20Full%20Test/lastCompletedBuild/testReport/com.myvest.sps.web.services.resources.common.portfolio.analysis/PortfolioAnalysisResourceImplIntegrationTest/testDriftAssetClassificationWithNoOrder/\r\n\r\n",
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
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-16644/watchers",
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
              "labels": [],
              "customfield_10091": null,
              "parent": {
                "id": "36649",
                "key": "AMMO-16533",
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/36649",
                "fields": {
                  "summary": "Fix integration tests from 01/29/2013",
                  "status": {
                    "self": "http://jira.myvest.com:8882/rest/api/2/status/5",
                    "description": "A resolution has been taken, and it is awaiting verification by reporter. From here issues are either reopened, or are closed.",
                    "iconUrl": "http://jira.myvest.com:8882/images/icons/statuses/resolved.png",
                    "name": "Resolved",
                    "id": "5"
                  },
                  "priority": {
                    "self": "http://jira.myvest.com:8882/rest/api/2/priority/2",
                    "iconUrl": "http://jira.myvest.com:8882/images/icons/priorities/critical.png",
                    "name": "Critical",
                    "id": "2"
                  },
                  "issuetype": {
                    "self": "http://jira.myvest.com:8882/rest/api/2/issuetype/8",
                    "id": "8",
                    "description": "An user story",
                    "iconUrl": "http://jira.myvest.com:8882/images/icons/issuetypes/story.png",
                    "name": "Story",
                    "subtask": false
                  }
                }
              },
              "workratio": -1,
              "assignee": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=nle",
                "name": "nle",
                "emailAddress": "nle@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Nguyen Le",
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
              "versions": [],
              "environment": null,
              "timeestimate": null,
              "aggregateprogress": {
                "progress": 0,
                "total": 0
              },
              "lastViewed": null,
              "customfield_10050": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=bmadsen",
                "name": "bmadsen",
                "emailAddress": "bmadsen@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&ownerId=bmadsen&avatarId=10070",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?ownerId=bmadsen&avatarId=10070"
                },
                "displayName": "Ben Madsen",
                "active": true
              },
              "customfield_10030": null,
              "components": [],
              "timeoriginalestimate": null,
              "customfield_10071": null,
              "aggregatetimespent": null
            }
          },
          {
            "expand": "editmeta,renderedFields,transitions,changelog,operations",
            "id": "35466",
            "self": "http://jira.myvest.com:8882/rest/api/2/issue/35466",
            "key": "AMMO-15855",
            "fields": {
              "progress": {
                "progress": 1800,
                "total": 1800,
                "percent": 100
              },
              "summary": "System Error creating a Strategy Assignments",
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
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-15855/votes",
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
                  "self": "http://jira.myvest.com:8882/rest/api/2/version/12013",
                  "id": "12013",
                  "name": "Dev/UAT/Demo support",
                  "archived": false,
                  "released": false
                }
              ],
              "resolutiondate": "2012-11-26T12:10:52.000-0800",
              "timespent": 1800,
              "reporter": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=meverett",
                "name": "meverett",
                "emailAddress": "meverett@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Mike Everett",
                "active": true
              },
              "aggregatetimeoriginalestimate": null,
              "updated": "2012-11-26T12:10:52.000-0800",
              "created": "2012-11-26T11:47:03.000-0800",
              "description": "Trying to Create Strategy Assignments in sales.uat.myvest.com\r\n\r\nUID:  Mike.Everett\r\nPW:  spsdemo13\r\n\r\nIn the Thomson Reuters organization, when trying to add a Strategy Assignment code, I get a system error.  The initial error message indicated that no mappings had been set up.",
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
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-15855/watchers",
                "watchCount": 2,
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
              "labels": [],
              "customfield_10091": null,
              "workratio": -1,
              "assignee": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=dburban",
                "name": "dburban",
                "emailAddress": "dburban@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "David Burban",
                "active": true
              },
              "customfield_10500": null,
              "aggregatetimeestimate": 0,
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
              "versions": [],
              "environment": null,
              "timeestimate": 0,
              "aggregateprogress": {
                "progress": 1800,
                "total": 1800,
                "percent": 100
              },
              "lastViewed": null,
              "customfield_10050": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=meverett",
                "name": "meverett",
                "emailAddress": "meverett@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Mike Everett",
                "active": true
              },
              "customfield_10030": null,
              "components": [],
              "timeoriginalestimate": null,
              "customfield_10071": null,
              "aggregatetimespent": 1800
            }
          },
          {
            "expand": "editmeta,renderedFields,transitions,changelog,operations",
            "id": "35210",
            "self": "http://jira.myvest.com:8882/rest/api/2/issue/35210",
            "key": "AMMO-15741",
            "fields": {
              "progress": {
                "progress": 0,
                "total": 0
              },
              "summary": "Make BaseAlert just contain an id",
              "customfield_10081": null,
              "issuetype": {
                "self": "http://jira.myvest.com:8882/rest/api/2/issuetype/3",
                "id": "3",
                "description": "A task that needs to be done.",
                "iconUrl": "http://jira.myvest.com:8882/images/icons/issuetypes/task.png",
                "name": "Task",
                "subtask": false
              },
              "customfield_10080": null,
              "customfield_10302": null,
              "votes": {
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-15741/votes",
                "votes": 0,
                "hasVoted": false
              },
              "resolution": {
                "self": "http://jira.myvest.com:8882/rest/api/2/resolution/1",
                "id": "1",
                "description": "A fix for this issue is checked into the tree and tested.",
                "name": "Fixed"
              },
              "fixVersions": [],
              "resolutiondate": "2012-11-13T19:06:16.000-0800",
              "timespent": null,
              "reporter": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=mhunter",
                "name": "mhunter",
                "emailAddress": "mhunter@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Matthew Hunter",
                "active": true
              },
              "aggregatetimeoriginalestimate": null,
              "updated": "2012-11-13T19:06:16.000-0800",
              "created": "2012-11-12T17:27:50.000-0800",
              "description": "Make BaseAlert just contain an id and move the other fields to another object which the alerts extend.",
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
                "self": "http://jira.myvest.com:8882/rest/api/2/issue/AMMO-15741/watchers",
                "watchCount": 2,
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
              "labels": [],
              "customfield_10091": null,
              "workratio": -1,
              "assignee": {
                "self": "http://jira.myvest.com:8882/rest/api/2/user?username=dliang",
                "name": "dliang",
                "emailAddress": "dliang@myvest.com",
                "avatarUrls": {
                  "16x16": "http://jira.myvest.com:8882/secure/useravatar?size=small&avatarId=10102",
                  "48x48": "http://jira.myvest.com:8882/secure/useravatar?avatarId=10102"
                },
                "displayName": "Dan Liang",
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
              "versions": [],
              "environment": null,
              "timeestimate": null,
              "aggregateprogress": {
                "progress": 0,
                "total": 0
              },
              "lastViewed": null,
              "customfield_10050": null,
              "customfield_10030": null,
              "components": [],
              "timeoriginalestimate": null,
              "customfield_10071": null,
              "aggregatetimespent": null
            }
          }
        ]
      };
      $scope.issues = jira_response.issues;
    });