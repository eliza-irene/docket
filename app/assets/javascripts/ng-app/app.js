angular
    .module('docketApp', [
        'ngAnimate',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ct.ui.router.extras',
        'templates',
        'ui.calendar'
    ])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
        function ($stateProvider, $urlRouterProvider, $locationProvider ) {

    /* Routes and States */
     $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'home.html',
            controller: 'HomeCtrl'
        })

        // an abstract state that just serves as a
        // parent for the below child states
        .state('dashboard', {
            abstract: true,
            url: '/dashboard',
            templateUrl: 'dashboard/side_bar.html',
            controller: 'SideBarCtrl',
            resolve: { //Gets the current users info on page load
                userInfo: [ '$http', function($http) {
                    return $http.get('/users.json').then(function(data) {
                        return data.data;
                    });
                }]
            }
        })
            // the default route when someone hits dashboard
            .state('dashboard.calendar', {
                url: '',
                templateUrl: 'dashboard/calendar.html',
                controller: 'CalendarCtrl',
                resolve: { // Gets the current users events on page load
                  events: ['$http', function($http) {
                    return $http.get('/events.json').then(function(data) {
                        return data.data;
                    });
                  }], //Gets the current users free times on page load
                  freeTimes: ['$http', function($http) {
                    return $http.get('/free_times.json').then(function(data) {
                        return data.data;
                    });
                  }]
                }
            })
            // this is /dashboard/two
            .state('dashboard.search_results', {
                url: '/search_results',
                templateUrl: 'dashboard/search_results.html',
                controller: 'SearchResultsCtrl'
            })
            // this is /dashboard/three
            .state('dashboard.search_detail', {
                url: '/search_detail',
                templateUrl: 'dashboard/event_detail.html',
                controller: 'EventDetailCtrl'
            })
            // this is /dashboard/four
            .state('dashboard.new_free_time', {
                url: '/new_free_time',
                templateUrl: 'dashboard/new_free_time.html',
                controller: 'NewFreeTimeCtrl'
            }) 
            // this is dashboard five
            .state('dashboard.calendar_event_view', {
                url: '/calendar_event_view',
                templateUrl: 'dashboard/calendar_event_view.html',
                controller: 'CalendarCtrl'
            });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    // $locationProvider.html5Mode(true);

}]);
