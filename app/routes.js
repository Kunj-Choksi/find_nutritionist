app.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'pages/home.html',
            controller: 'homeCtrl'
        })
        .state('nutritionist-view', {
            url: '/nutritionist/view/:id',
            templateUrl: '/pages/nutritionist/view.html',
            controller: 'nutritionistViewCtrl'
        })
        .state('edit-user-profile', {
            url: '/user/edit/:id',
            templateUrl: 'pages/user/edit.html',
            controller: 'editUserProfileCtrl'
        });

    $urlRouterProvider.otherwise('home')
});