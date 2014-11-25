angular.module('docketApp')
  .controller('CalendarCtrl', ['$scope','$state', 'eventService', 'events', 'freeTimes', function($scope, $state, eventService, events, freeTimes) {

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

    
      // This takes the json call to the user events and adds it to the calendar
    $scope.calendarData = {
      events: events // eventService.calendarEvents
    };

//[ { title: 'free time', start: '2014-11-24'} ]
     // $scope.calendarData.events.push(freeTimes[0]);

   
    // eventService.getCalendarEvents().success(function(data) {
    //   // $scope.calendarData.events.length = 0;
    //   // angular.copy($scope.calendarData.events, data);
    //   $scope.calendarData.events.push({
    //     title: 'Another',
    //     start: '2014-11-24'
    //   }); // data;

    //   $('#calendar').fullCalendar('rerenderEvents');

    // });

  }]);