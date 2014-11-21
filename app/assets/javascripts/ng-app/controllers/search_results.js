angular.module('docketApp')
  .controller('SearchResultsCtrl', ["$scope", "eventService", function($scope, eventService) {

    $scope.$watch(function() { return eventService.events; }, function(newValue, oldValue) {
      $scope.events = newValue;
    }, true);
    
  }]);

