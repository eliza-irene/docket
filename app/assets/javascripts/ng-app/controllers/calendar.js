angular.module('docketApp')
  .controller('CalendarCtrl', ['$scope','$state', 'eventService', function($scope, $state, eventService) {

    $scope.dayClick = function(date) {
      eventService.setFreeTimeDay(date);
      $state.go('dashboard.new_free_time');
    };

    $scope.eventDrop = function() {
      alert('eventDrop');
    };

    $scope.eventResize = function() {
      alert('eventResize');
    };

    $scope.uiConfig = {
      calendar: {
        height: 700,
        editable: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek'
        },
        eventLimit: true, // allow "more" link when too many events
        dayClick: $scope.dayClick,
        eventDrop: $scope.eventDrop,
        eventResize: $scope.eventResize
      }
    };

    $scope.calendarData = {
       events: eventService.calendarEvents
    };

  }]);
      