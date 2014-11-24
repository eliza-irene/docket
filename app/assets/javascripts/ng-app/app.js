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

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider, $urlRouterProvider, $locationProvider) {

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
            controller: 'SideBarCtrl'
        })
            // the default route when someone hits dashboard
            .state('dashboard.calendar', {
                url: '',
                templateUrl: 'dashboard/calendar.html',
                controller: 'CalendarCtrl'
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
            });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);
}]);
