app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: '../page/home/home.html',
            controller: 'homeController'
        })
        .state('details', {
            url: '/details',
            templateUrl: '../page/show-search-details/show-search-details.html',
            controller: 'showSearchedval'
        })
        .state('edit-user-profile', {
            url: '/edit-user-profile',
            templateUrl: '../page/user-profile/user-view-edit-profile.html',
            controller: 'editUser'
        });

    $urlRouterProvider.otherwise('home')
})