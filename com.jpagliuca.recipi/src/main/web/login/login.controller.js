'use strict';

angular.module('recipi')

    .controller('loginController', loginController);

loginController.$inject = ['$scope', '$location', 'userService'];

/**
 * functionality for login
 * @param $scope
 */
function loginController ($scope, $location, userService) {
    $scope.login = function() {
        userService.login($scope.username, $scope.password).then(
            function(response) {
                $location.path("home");
            }
        );
    }
    $scope.test = function() {
        console.log('hello');
    }
}