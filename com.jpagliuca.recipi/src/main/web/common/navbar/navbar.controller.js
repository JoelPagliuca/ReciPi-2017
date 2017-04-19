'use strict';

angular.module('recipi')

    .controller('navbarController', navbarController);

navbarController.$inject = ['$scope'];

/**
 * functionality for navbar
 * @param $scope
 */
function navbarController ($scope) {
    $scope.test = function() {
        console.log('hello');
    }
}