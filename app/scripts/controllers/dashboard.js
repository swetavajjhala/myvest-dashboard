'use strict'; //Similar to 'warnings as errors' - should always have this to prevent bad Javascript errors - always include this on all of your JS files

angular.module('myvestDashboardApp')
  .controller('DashboardController',function ($scope, $document, $timeout) {
      var clientWidth = $document.find("body")[0].clientWidth; //Get the client's width

      var widgets = ["bart", "jira", "countdown", "helloworld"]; //Master list of widgets -- add new ones here
      var nextWidgetIndex = 1;

      //Get the widgets
      var firstWidget = document.getElementById("firstWidget");
      var secondWidget = document.getElementById("secondWidget");

      firstWidget.style.width = (0.6 * clientWidth) + "px";
      secondWidget.style.width = (0.6 * clientWidth) + "px";

      var currentWidget = firstWidget;
      var nextWidget = secondWidget;

      var initializeFirstWidgets = function() {
        //Initialize & move first 2 widgets into place
        $scope.firstWidget = getFileLocation(0);
        $scope.secondWidget = getFileLocation(1);

        $scope.currentWidget = widgets[0];
        $scope.nextWidget = widgets[1];

        moveToNext(nextWidget);
        moveToCurrent(currentWidget);
      };

      var showNextElement = function(){
        //Do transition to get the next widget
        moveToCurrent(nextWidget);
        moveToDone(currentWidget);

        $scope.completedWidget = widgets[(widgets.length + nextWidgetIndex-1) % widgets.length];
        $scope.currentWidget = widgets[nextWidgetIndex];
        nextWidgetIndex = (nextWidgetIndex + 1) % widgets.length;

        //Swap the widgets (so next is in front of current)
        var tempWidget = currentWidget;
        currentWidget = nextWidget;
        nextWidget = tempWidget;

        //Move element that was just displayed back to end of the widgets queue
        $timeout(positionNextElement, 1000);
      };

      var positionNextElement = function() {
        //Move next widget to next in line
        moveToNext(nextWidget);
        var widgetFileLocation = getFileLocation(nextWidgetIndex);
        if(nextWidget === firstWidget) {
          $scope.firstWidget = widgetFileLocation;
        } else {
          $scope.secondWidget = widgetFileLocation;
        }
        //Fires an event for the next widget based on the view's file name.
        $scope.nextWidget = widgets[nextWidgetIndex];
        $timeout(showNextElement, 10000); //Start the cycle again
      };

      $timeout(showNextElement, 10000); //Transition set to every 5s

      var getFileLocation = function(counter) {
        return "views/" + widgets[counter] + ".html";
      };

      //Queue up this element to be displayed next
      var moveToNext = function(element){
        element.style.visibility = "hidden";
        element.style.left = clientWidth + "px";
      };

      var moveToCurrent = function(element){
        element.style.visibility = "visible";
        element.style.left = ((clientWidth/2) - (parseInt(element.style.width)/2)) + "px";
      };

      var moveToDone = function(element) {
        element.style.left = (-clientWidth) + "px";
      };

      initializeFirstWidgets();
  });

//Event-handling functions
var onWidgetNext = function($scope, widgetName, f) {
  onWidgetEvent($scope, "nextWidget", widgetName, f);
};

var onWidgetCurrent = function($scope, widgetName, f) {
  onWidgetEvent($scope, "currentWidget", widgetName, f);
};

var onWidgetCompleted = function($scope, widgetName, f) {
  onWidgetEvent($scope, "completedWidget", widgetName, f);
};

var onWidgetEvent = function($scope, eventType, widgetName, f) {
  $scope.$watch(eventType, function(nextWidgetName) {
    if(nextWidgetName == widgetName) {
      f();
    }
  });
};
