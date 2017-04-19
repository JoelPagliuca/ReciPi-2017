'use strict';

angular.module('recipi')

    .controller('navbarController', navbarController);

navbarController.$inject = ['$scope', '$location', 'store', 'authManager'];

/**
 * functionality for navbar
 * @param $scope
 */
function navbarController ($scope, $location, store, auth) {
    $scope.isAuthenticated = auth.isAuthenticated;

    /**
     * logout function for navbar
     */
    $scope.logout = function() {
        store.remove('token');
        auth.unauthenticate();
        $location.path("login");
    }
}