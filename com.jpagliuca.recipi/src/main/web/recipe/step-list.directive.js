'use strict';

angular.module('recipi')

    .directive('stepList', stepList);

function stepList() {
    return {
        templateUrl: "recipe/step-list.html"
    };
}