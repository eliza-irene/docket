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

    var testEvent = {
      title: 'Whatup?',
      start: '2014-11-24'
    };

    $scope.calendarData = {
      events: [ testEvent ]
    };

    $scope.calendarData.events.push( {
      title: 'XYZ',
      start: '2014-11-25'
    });

   
    eventService.getCalendarEvents().success(function(data) {
      // $scope.calendarData.events.length = 0;
      // angular.copy($scope.calendarData.events, data);
      $scope.calendarData.events.push({
        title: 'Another',
        start: '2014-11-22'
      }); // data;

      $('#calendar').fullCalendar('rerenderEvents');

    });

  }]);