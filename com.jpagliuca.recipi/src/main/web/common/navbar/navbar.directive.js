'use strict';

angular.module('recipi')

    .directive('navbar', navbar);

function navbar() {
    return {
        restrict: 'E',
        templateUrl: "common/navbar/navbar.html"
    };
}