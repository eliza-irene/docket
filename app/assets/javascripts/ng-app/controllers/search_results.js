angular.module('docketApp')
  .controller('SearchResultsCtrl', ["$scope", "$modal", "$log", "eventService", function($scope, $modal, $log, eventService) {

    $scope.$watch(function() { return eventService.events; }, function(newValue, oldValue) {
      $scope.events = newValue;
    }, true);

    $scope.open = function (events) {

      $scope.selectEvent = function(event) {
        $scope.selectedEvent = event;
      };

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        backdrop: true,
        resolve: {
          events: function () {
            return $scope.events;
          }
        }
      });
    };
}]);

angular.module('docketApp').controller('ModalInstanceCtrl',['$scope', '$modalInstance', 'events', function ($scope, $modalInstance, events) {

  $scope.events = events;
  $scope.selected = {
    event: $scope.events[0]
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);


  

