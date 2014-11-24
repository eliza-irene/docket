angular.module('docketApp')
  .controller('NewFreeTimeCtrl', ['$scope', '$state', 'eventService', function($scope, $state, eventService) {

    $scope.freeTimeDay = eventService.freeTimeDay;

    $scope.addFreeTime = function() {
      eventService.addFreeTime($scope.freeTimeDay, $scope.freeTimeForm.startTime, $scope.freeTimeForm.endTime);
      $state.go('dashboard.calendar');
    };

}]);
