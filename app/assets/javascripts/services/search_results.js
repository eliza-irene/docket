angular.module('docketApp')
.service('eventService', ['$http', function($http) {

  var that = this;
  
  that.events = [];

  this.search = function(location, date) {
    console.log('eventService.search called with location, date = ' + location + ', ' + date);
    return $http.get('/search.json', { params: { location: location, date: date }}).success(function(data) {
        console.log('eventService.search got data = ' + JSON.stringify(data));
        that.events = data;
    });
  };

}]);



    // # Gives flexibility on if params come in via query string or header
    // provided_title = params[:title] || request.headers["title"] || "anchorman"