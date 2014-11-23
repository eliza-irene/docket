angular
    .module('docketApp', [
        'ngAnimate',
        'ngSanitize',
        'ui.router',
        'ui.bootstrap',
        'ct.ui.router.extras',
        'templates',
        'ui.calendar',
        'googleApi'
    ])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 'googleLoginProvider', 
        function ($stateProvider, $urlRouterProvider, $locationProvider, googleLoginProvider) {

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
            .state('dashboard.free_options', {
                url: '/free_options',
                templateUrl: 'dashboard/free_options.html'
            });

    // default fall back route
    $urlRouterProvider.otherwise('/');

    // enable HTML5 Mode for SEO
    $locationProvider.html5Mode(true);

    googleLoginProvider.configure({
        clientId: '85117048694-h0tf2erv6vv3aj3fqprroh67kna3qgj9.apps.googleusercontent.com',
        scopes: ["https://www.googleapis.com/auth/userinfo.email", "https://www.googleapis.com/auth/calendar"]
    });

}]);
