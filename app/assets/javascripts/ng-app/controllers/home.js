angular.module('docketApp')
  .controller('HomeCtrl', ['$scope', 'googleLogin', 'googleCalendar', 'googlePlus', 
    function($scope, googleLogin, googleCalendar, googlePlus) {
      $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];

        $scope.login = function () {
            googleLogin.login();
        };

        $scope.$on("googlePlus:loaded", function() {
          googlePlus.getCurrentUser().then(function(user) {
            $scope.currentUser = user;
          });
        })
        $scope.currentUser = googleLogin.currentUser;

        $scope.loadEvents = function() {
            this.calendarItems = googleCalendar.listEvents({calendarId: this.selectedCalendar.id});
        }

        $scope.loadCalendars = function() {
            $scope.calendars = googleCalendar.listCalendars();
        }

    }]);
