angular.module('docketApp')
.service('eventService', function($http) {

  this.search = function(location, date) {
    return $http.get('/search.json', { params: { location: location, date: date }});
  };
});



    // # Gives flexibility on if params come in via query string or header
    // provided_title = params[:title] || request.headers["title"] || "anchorman"