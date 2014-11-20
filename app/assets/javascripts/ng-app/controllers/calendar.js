angular.module('docketApp')
  .controller('CalendarCtrl', ['$scope', function($scope) {

    console.log('CalendarCtrl is alive!');

    $scope.dayClick = function() {
      alert('dayClick');
      console.log('dayClick');
    };

    $scope.eventDrop = function() {
      alert('eventDrop');
    };

    $scope.eventResize = function() {
      alert('eventResize');
    };

    $scope.uiConfig = {
      calendar: {
        height: 600,
        editable: true,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,basicWeek,basicDay'
        },
        defaultDate: '2014-11-12',
        eventLimit: true, // allow "more" link when too many events
        dayClick: $scope.dayClick,
        eventDrop: $scope.eventDrop,
        eventResize: $scope.eventResize
      }
    };

    // calendarService.getCalendarData().success(function(data) {
    //   $scope.calendarData = data;
    // });

    $scope.calendarData = {
      events: [
        {
          title: 'All Day Event',
          start: '2014-11-01'
        },
        {
          title: 'Long Event',
          start: '2014-11-07',
          end: '2014-11-10'
        }
      ],
      // color: 'yellow',   // an option!
      // textColor: 'black' // an option!
    };

}]);
      