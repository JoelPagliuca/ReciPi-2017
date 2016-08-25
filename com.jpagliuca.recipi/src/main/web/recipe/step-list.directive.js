'use strict';

angular.module('recipi')

    .directive('stepList', stepList);

function stepList() {
    return {
        restrict: 'E',
        templateUrl: "recipe/step-list.html"
    };
}