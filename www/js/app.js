angular.module('starter', ['ionic', 'starter.controllers', 'starter.services', 'satellizer'])

.run(function($ionicPlatform) {

    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($authProvider) {
    $authProvider.facebook({
        clientId: '1764102662933892',
        scope: 'email, public_profile, user_photos, user_friends',
        responseType: 'token'
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.mainpage', {
        url: '/mainpage',
        views: {
            'menuContent': {
                templateUrl: 'templates/mainpage.html',
                controller: 'MainPageC'
            }
        }
    });

    $urlRouterProvider.otherwise('/app/mainpage');
});