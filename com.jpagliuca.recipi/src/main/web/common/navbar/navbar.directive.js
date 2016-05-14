'use strict';

angular.module('recipi')

    .directive('navbar', navbar);

function navbar() {
    return {
        templateUrl: "common/navbar/navbar.html"
    };
}