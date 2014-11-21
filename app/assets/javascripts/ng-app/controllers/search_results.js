angular.module('docketApp')
  .controller('SearchResultsCtrl', ["$scope", "$modal", "$log", "eventService", function($scope, $modal, $log, eventService, items) {

    $scope.$watch(function() { return eventService.events; }, function(newValue, oldValue) {
      $scope.events = newValue;
    }, true);


    $scope.items = ['item1', 'item2', 'item3'];

      $scope.open = function (size) {

      var modalInstance = $modal.open({
        templateUrl: 'myModalContent.html',
        controller: 'SearchResultsCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
  };
}]);

