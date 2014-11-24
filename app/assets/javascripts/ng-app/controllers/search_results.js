angular.module('docketApp')
  .controller('SearchResultsCtrl', ["$scope", "$state", "eventService", function($scope, $state, eventService) {
  $scope.data = {};
  $scope.data.selectedEvent = null;

  $scope.$watch(function() { return eventService.searchEvents; }, function(newValue, oldValue) {
    $scope.searchEvents = newValue;
  }, true);

  $scope.getDetails = function() {

    $state.go('dashboard.search_detail');
  };

  $scope.setSelectedEvent = function(event) {
    $scope.data.selectedEvent = event;
    eventService.setSelectedEvent(event);
    $state.go('dashboard.search_detail');
  }

}]);

