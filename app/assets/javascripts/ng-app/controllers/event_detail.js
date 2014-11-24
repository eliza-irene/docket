angular.module('docketApp')
  .controller('EventDetailCtrl', ["$scope", "$state", "$sanitize", "eventService", function($scope, $state, $sanitize, eventService) {

    console.log('EventDetailCtrl is alive!');

    $scope.selectedEvent = eventService.getSelectedEvent();

    // $scope.description = ; get Dr Mike's help on this
 
    $scope.remove = function(index) {
      $scope.calendarEvents.splice($scope.calendarEvents.indexOf(event), 1);
        $scope.selectedEvent = null;
    };

    $scope.addEvent = function(event) {
      eventService.addEvent(event);
      $state.go('dashboard.calendar');
    };
}]);