angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $auth, $ionicPopup) {

    $scope.loginData = {};

    $ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
    }).then(function(modal) {
        $scope.modal = modal;
    });

    $scope.closeLogin = function() {
        $scope.modal.hide();
    };

    $scope.login = function() {
        $scope.modal.show();
    };

    $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);
        $timeout(function() {
            $scope.closeLogin();
        }, 1500);
    };

    $scope.authenticate = function(provider) {
        $auth.authenticate(provider).then(function() {
                $ionicPopup.alert({
                    title: 'Success',
                    content: 'You have successfully logged in!'
                });
            })
            .catch(function(response) {
                $ionicPopup.alert({
                    title: 'Error',
                    content: response.data ? response.data || response.data.message : response
                });
            });
    };

    $scope.isAuthenticated = function() {
        return $auth.isAuthenticated();
    };

    $scope.logout = function() {
        return $auth.logout().then(function() {
                $ionicPopup.alert({
                    title: 'Success',
                    content: 'You have successfully logged out!'
                });
            })
            .catch(function(response) {
                $ionicPopup.alert({
                    title: 'Error',
                    content: response.data ? response.data || response.data.message : response
                });
            });
    };

});